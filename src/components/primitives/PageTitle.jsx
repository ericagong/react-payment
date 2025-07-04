import classnames from 'classnames';

export default function PageTitle({ children, className, ...props }) {
  return (
    <h3 className={classnames('page-title', className)} {...props}>
      {children}
    </h3>
  );
}
