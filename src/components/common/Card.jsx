import React from 'react';
import PropTypes from 'prop-types';

const Card = React.forwardRef(({ children, className = '', variant = 'default', padding = 'default', ...props }, ref) => {
  const baseClasses = 'overflow-hidden rounded-lg transition-shadow duration-300';
  const variantClasses = {
    default: 'bg-white shadow hover:shadow-md',
    outlined: 'bg-white border border-gray-200 hover:border-gray-300',
    elevated: 'bg-white shadow-md hover:shadow-lg',
  };
  const paddingClasses = {
    none: '',
    small: 'p-2',
    default: 'p-4',
    large: 'p-6',
  };

  return (
    <div 
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
});

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated']),
  padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
};

Card.displayName = 'Card';

export default Card;