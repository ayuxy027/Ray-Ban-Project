export default function Input({ className = '', ...props }) {
    return (
      <input
        className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${className}`}
        {...props}
      />
    )
  }