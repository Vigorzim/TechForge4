// atividades saparadas abaixo:
// atividade 1
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

// atividade 2
abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const total = (this.items[item] || 0) + quantity;
        if (total > 10) {
            console.log(`O item "${item}" não pode ultrapassar 10 unidades.`);
            this.items[item] = 10;
        } else {
            this.items[item] = total;
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// atividade 3
abstract class FavoriteManager {
    protected favorites: Set<string> = new Set();

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites.add(item);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites = new Set([item, ...this.favorites]);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites);
    }
}

// atividade 4
abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
    }
}