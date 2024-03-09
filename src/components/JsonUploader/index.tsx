'use client';
import React, { useState } from 'react';

import { Wrapper } from './styles';

interface JsonUploaderProps {
  onJsonUpload: (jsonData: any) => void;
}

export const JsonUploader: React.FC<JsonUploaderProps> = ({ onJsonUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file && file.type === 'application/json') {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target?.result as string);
          onJsonUpload(jsonData);
        } catch (error) {
          console.error('Invalid JSON format');
        }
      };
      reader.readAsText(file);
    } else {
      console.error('Invalid file type. Please select a JSON file.');
    }
  };

  return (
    <Wrapper>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </Wrapper>
  );
};
