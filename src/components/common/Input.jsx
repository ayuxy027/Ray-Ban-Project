import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ 
  className = '', 
  variant = 'default',
  size = 'md',
  fullWidth = false,
  icon,
  error,
  ...props 
}, ref) => {
  const baseClasses = 'block rounded-md shadow-sm focus:ring-2 focus:ring-offset-0 focus:outline-none transition-colors duration-200';
  const variantClasses = {
    default: 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
    error: 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500',
  };
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };
  const widthClass = fullWidth ? 'w-full' : '';
  const iconClass = icon ? 'pl-10' : '';

  return (
    <div className={`relative ${widthClass}`}>
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        ref={ref}
        className={`${baseClasses} ${variantClasses[error ? 'error' : variant]} ${sizeClasses[size]} ${iconClass} ${className}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  error: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;