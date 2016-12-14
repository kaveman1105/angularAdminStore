import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let videos = [
            { title: 'The Avengers', rating: 5, description: 'hulk smash', price: 5 },
            { title: 'Inception', rating: 4, description: 'Dreaming about dreaming', price: 6 },
            { title: 'Batman', rating: 5, description: 'I AM THE BATMAN!!', price: 4 },
        ];

        let customers = [
            { name: "kevin", id: 1, address: "somehere street", payment: 1234 },
            { name: "may", id: 2, address: "somehere street", payment: 1234 },
            { name: "john", id: 3, address: "somehere street", payment: 1234 },
            { name: "forrest gump", id: 4, address: "somehere street", payment: 1234 },
            { name: "bruce bannor", id: 5, address: "somehere street", payment: 1234 },
        ]

        let admins = [
            { userName: "admin", password: "password" },
            { userName: "otherAdmin", password: "password" }
        ]
        return { videos, customers, admins };
    }
}