export interface ITask {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
  status: 'completed' | 'expired' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject {
  id: string;
  name: string;
  tasks: ITask[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  softdeletedAt: Date;
}
