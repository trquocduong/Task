import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 0;

  createUser(name: string): User {
    const newUser = { id: ++this.idCounter, name };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
