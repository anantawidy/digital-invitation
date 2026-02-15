export interface RsvpEntry {
  id: number;
  name: string;
  message: string;
  attendance: 'Hadir' | 'Tidak Hadir';
}