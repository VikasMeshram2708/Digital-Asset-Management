import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the state and actions interface
interface MediaStore {
  mediaFile: File | null; // State to hold the uploaded file
  localMediaUpload: (mediaFile: File) => void; // Action to update the state
}

// Create the Zustand store with persistence
export const useStore = create<MediaStore>()(
  persist(
    (set) => ({
      mediaFile: null, // Initialize the state with null (no file uploaded initially)
      localMediaUpload: (mediaFile: File) => set({ mediaFile }), // Update the state with the new file
    }),
    {
      name: "media-storage", // Unique key for storage
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    },
  ),
);
