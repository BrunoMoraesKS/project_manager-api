export interface ITask {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
