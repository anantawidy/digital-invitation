export interface RsvpEntry {
  id: string;
  name: string;
  message: string;
  attendance: 'Hadir' | 'Tidak Hadir';
  createdAt: number;
}