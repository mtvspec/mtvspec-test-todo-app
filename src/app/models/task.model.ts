export type TaskData = {
  id: string
  username: string
  email: string
  text: string
  status: number
};

export class Task {

  public readonly id: string;
  public readonly username: string;
  public readonly email: string;
  public readonly text: string;
  public readonly status: TaskStatus;
  public readonly completed: boolean = false;
  public readonly edited: boolean = false;

  constructor(data: TaskData) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.text = data.text;
    this.status = data.status;

    switch (data.status) {
      case TaskStatus.NotCompleted:
        this.completed = false;
        this.edited = false;
        break;
      case TaskStatus.NotCompletedAndEditedByAdmin:
        this.completed = false;
        this.edited = true;
        break;
      case TaskStatus.Completed:
        this.completed = true;
        this.edited = false;
        break;
      case TaskStatus.CompletedAndEditedByAdmin:
        this.completed = true;
        this.edited = true;
        break;

      default:
        break;
    }

  }

}

export type NewTaskPayload = {
  username: string;
  email: string;
  text: string;
};

export type EditTaskPayload = {
  id: string;
  data: {
    text: string;
    status: TaskStatus;
  };
  token: string;
};

export enum TaskStatus {
  NotCompleted = 0,
  NotCompletedAndEditedByAdmin = 1,
  Completed = 10,
  CompletedAndEditedByAdmin = 11
}
