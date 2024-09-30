import Card from '../common/Card'

export default function ChartCard({ title, children }) {
  return (
    <Card>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        <div className="mt-5">
          {children}
        </div>
      </div>
    </Card>
  )
}