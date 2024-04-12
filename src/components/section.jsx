export default function Section({ children, id }) {
    return (
      <div className="w-full mx-auto h-full scroll-my-12" id={id}>
        {children}
      </div>
    );
  }
  