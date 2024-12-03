abstract class TaskManager {
    protected tasks: Set<string> = new Set();

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    addTask(task: string): void {
        this.tasks.add(`Projeto: ${task}`);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        this.tasks.add(`Diária: ${task}`);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}