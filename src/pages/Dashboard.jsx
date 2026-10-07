import Table from "../components/Table"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Test</h1>
            <Table
                columns={['ID', 'الاسم', 'البريد']}
                data={[
                    { id: 1, name: 'سارة', email: 's@test.com' },
                    { id: 2, name: 'نورة', email: 'n@test.com' }
                ]}
            />
        </div>
    )
}