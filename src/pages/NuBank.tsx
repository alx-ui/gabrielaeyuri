import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function NuBank() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/?pix=open#presentes', { replace: true });
  }, [navigate]);

  return null;
}
