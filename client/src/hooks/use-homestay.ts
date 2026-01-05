import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// ============================================
// ROOMS HOOKS
// ============================================

export function useRooms() {
  return useQuery({
    queryKey: [api.rooms.list.path],
    queryFn: async () => {
      const res = await fetch(api.rooms.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch rooms");
      return api.rooms.list.responses[200].parse(await res.json());
    },
  });
}

export function useRoom(slug: string) {
  return useQuery({
    queryKey: [api.rooms.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.rooms.get.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) throw new Error("Room not found");
      if (!res.ok) throw new Error("Failed to fetch room");
      return api.rooms.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// ============================================
// AMENITIES HOOKS
// ============================================

export function useAmenities() {
  return useQuery({
    queryKey: [api.amenities.list.path],
    queryFn: async () => {
      const res = await fetch(api.amenities.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch amenities");
      return api.amenities.list.responses[200].parse(await res.json());
    },
  });
}
