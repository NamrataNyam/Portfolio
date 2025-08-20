import { useState, useRef } from "react";
import { Camera, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AvatarUploadProps {
  size?: "sm" | "md" | "lg";
  onPhotoChange?: (photoUrl: string | null) => void;
  currentPhoto?: string | null;
  className?: string;
}

export function AvatarUpload({ 
  size = "md", 
  onPhotoChange, 
  currentPhoto, 
  className = "" 
}: AvatarUploadProps) {
  const [photo, setPhoto] = useState<string | null>(currentPhoto || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-32 h-32", 
    lg: "w-48 h-48"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6"
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPG, PNG, or WebP image.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPhoto(result);
      onPhotoChange?.(result);
      setIsUploading(false);
      toast({
        title: "Photo updated!",
        description: "Your avatar has been updated successfully.",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        onClick={handleClick}
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 border-sage/20 shadow-xl bg-muted/50 flex items-center justify-center cursor-pointer group hover:border-sage/40 transition-all duration-300 ${
          isUploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {photo ? (
          <img
            src={photo}
            alt="Profile avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="w-8 h-8 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:bg-sage/20 transition-colors duration-300">
              {isUploading ? (
                <div className="animate-spin w-3 h-3 border-2 border-sage border-t-transparent rounded-full"></div>
              ) : (
                <User className={`${iconSizes[size]} text-sage`} />
              )}
            </div>
            {size !== "sm" && (
              <p className="text-xs text-muted-foreground">Add Photo</p>
            )}
          </div>
        )}
      </div>

      {/* Camera icon overlay on hover */}
      <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer pointer-events-none`}>
        <Camera className={`${iconSizes[size]} text-white`} />
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
        }}
        className="hidden"
      />
    </div>
  );
}