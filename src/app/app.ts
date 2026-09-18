import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounter } from "./my-counter/my-counter";
import { User } from './models/user.model';
import { UserCard } from "./components/user-card/user-card";
import { Controls } from './components/controls/controls';

@Component({
  imports: [RouterOutlet, UserCard, Controls],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('my-app');
  protected readonly users: WritableSignal<User[]> = signal([
    {
      id: 1,
      name: "Leanne Graham",
      username: "LeGra",
      email: "legra@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "ErHow",
      email: "erhow@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "CleBau",
      email: "clebau@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "PatLeb",
      email: "patleb@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "CheDiet",
      email: "chediet@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "MrsSch",
      email: "mrssch@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "KurWei",
      email: "kurwei@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "NicRun",
      email: "nicrun@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "GleRei",
      email: "glerei@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "CleDuB",
      email: "cledub@gmail.com",
      image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
    }
  ])

  protected readonly userCount = computed(() => this.users().length);

  sortByName() {
    this.users.update(list => [...list].sort((a, b) => a.name.localeCompare(b.name)));
  }

  sortById() {
    this.users.update(list => [...list].sort((a, b) => a.id - b.id));
  }

  reverse() {
    this.users.update(list => [...list].reverse());
  }

  removeUser(id: number) {
    this.users.update(list => list.filter(u => u.id !== id));
  }
}
