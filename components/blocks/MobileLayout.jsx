import React from "react";

function MobileLayout(WrappedComponent) {
  return (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
}

export default MobileLayout;
