import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

	addTask(taskData: NewTaskData, userId: string) {
		this.tasks.unshift({
			id: new Date().getTime.toString(),
			title: taskData.title,
			summary: taskData.summary,
			dueDate: taskData.data,
			userId: userId
		})
	}

	removeTask(id: string) {
		return this.tasks.filter(task => task.id !== id);
	}
}