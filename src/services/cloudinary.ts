const CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'nome-cloud-ficticio';
const UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'preset-upload-ficticio';

type CloudinaryUploadResponse = {
  secure_url?: string;
  error?: { message: string };
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const payload = (await response
    .json()
    .catch(() => ({}))) as CloudinaryUploadResponse;

  if (!response.ok || !payload.secure_url) {
    throw new Error(payload.error?.message ?? 'Falha ao enviar a imagem');
  }

  return payload.secure_url;
};
