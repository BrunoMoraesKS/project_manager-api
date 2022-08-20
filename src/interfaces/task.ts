export interface ITask {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
  status: 'completed' | 'expired' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}
