import React, { useState, useEffect } from 'react';
export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const fireLoading = async (func: () => void) => {
    setLoading(true);
    await func();
    setLoading(false);
  }

  return {
    loading,
    fireLoading,
  }
};