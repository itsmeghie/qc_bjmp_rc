import { DeviceSettingPayload } from "@/lib/issues-definitions";
import { deleteDeviceSetting, getDeviceSetting } from "@/lib/query";
import { useTokenStore } from "@/store/useTokenStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";

const DeviceSetting = () => {
    const [searchText, setSearchText] = useState("");
    const token = useTokenStore().token;
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();

    const { data: DeviceSettingData } = useQuery({
        queryKey: ['device-setting'],
        queryFn: () => getDeviceSetting(token ?? ""),
    });

    const deleteMutation = useMutation({
        mutationFn: (id: number) => deleteDeviceSetting(token ?? "", id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["device-setting"] });
            messageApi.success("Device Setting deleted successfully");
        },
        onError: (error: any) => {
            messageApi.error(error.message || "Failed to delete Device Setting");
        },
    });

    const dataSource = DeviceSettingData?.map((device_setting, index) => ({
        key: index + 1,
        id: device_setting?.id ?? '',
        device: device_setting?.device ?? '',
        key: device_setting?.key ?? '', // Ensure this is correctly named
        value: device_setting?.value ?? '',
        description: device_setting?.description ?? '',
    })) || [];

    const filteredData = dataSource.filter((device_setting) =>
        Object.values(device_setting).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const columns: ColumnsType<DeviceSettingPayload> = [
        {
            title: 'No.',
            dataIndex: 'key', // This could be a string or a different name
            key: 'key',
            render: (_, __, index) => index + 1, // Render index as No.
        },
        {
            title: 'Device',
            dataIndex: 'device',
            key: 'device',
        },
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];

    return (
        <div>
            {contextHolder}
            <Table dataSource={filteredData} columns={columns} />
        </div>
    );
}

export default DeviceSetting;