import { useState, useRef } from "react";
import { Upload, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PhotoUploadProps {
  onPhotoChange?: (photoUrl: string | null) => void;
  currentPhoto?: string | null;
}

export function PhotoUpload({ onPhotoChange, currentPhoto }: PhotoUploadProps) {
  const [photo, setPhoto] = useState<string | null>(currentPhoto || null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

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
        title: "Photo uploaded successfully!",
        description: "Your professional photo has been added.",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setPhoto(null);
    onPhotoChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast({
      title: "Photo removed",
      description: "Your photo has been removed from the portfolio.",
    });
  };

  if (photo) {
    return (
      <div className="relative inline-block">
        <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-sage/20 shadow-lg">
          <img
            src={photo}
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleClick}
            className="bg-background/90 hover:bg-background text-muted-foreground hover:text-foreground"
          >
            <Upload className="h-3 w-3 mr-1" />
            Change
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleRemove}
            className="bg-background/90 hover:bg-background text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </Button>
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

  return (
    <div className="relative inline-block">
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`w-80 h-80 mx-auto lg:mx-0 rounded-2xl border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-300 ${
          isDragging
            ? 'border-sage bg-sage/5'
            : 'border-sage/30 hover:border-sage/60 bg-muted/50'
        } ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <div className="text-center p-8">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
            isDragging ? 'bg-sage/20' : 'bg-sage/10 group-hover:bg-sage/20'
          }`}>
            {isUploading ? (
              <div className="animate-spin w-6 h-6 border-2 border-sage border-t-transparent rounded-full"></div>
            ) : isDragging ? (
              <Check className="w-8 h-8 text-sage" />
            ) : (
              <Upload className="w-8 h-8 text-sage" />
            )}
          </div>
          
          {isUploading ? (
            <p className="text-muted-foreground font-medium">Uploading...</p>
          ) : isDragging ? (
            <p className="text-sage font-medium">Drop your photo here</p>
          ) : (
            <>
              <p className="text-muted-foreground font-medium mb-2">Add Professional Photo</p>
              <p className="text-muted-foreground text-sm mb-3">
                Click to upload or drag and drop your headshot
              </p>
              <p className="text-xs text-muted-foreground/70">
                Recommended: 400x400px • Max 5MB • JPG, PNG, WebP
              </p>
            </>
          )}
        </div>
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
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sage/5 to-transparent pointer-events-none"></div>
    </div>
  );
}