export interface Task {
    id: string
    status: TaskStatus
    title: string
    content: string
    expire: string
}

export enum TaskStatus {
    Processing = 0,
    Done = 1,
    Expired = 2,
}
