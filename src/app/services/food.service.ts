import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foods: Foods[] = [
    {
      id: 1,
      name: "pizza ",
      price: 4500,
      favorite: true,
      star: 3.5,
      tags: ["FastFood", "Pizza", "Lunch"],
      imageUrl: "./assets/images/pizza.jpg",
      cookTime: "10-12",
      origins: ["Italy"]
    },
    {
      id: 2,
      name: "cheesburger",
      price: 7000,
      favorite: false,
      star: 3.5,
      tags: ["FastFood", "cheesburger"],
      imageUrl: "./assets/images/cheesburger.jpg",
      cookTime: "10-45",
      origins: ["Germany", "US"]
    },
    {
      id: 3,
      name: "chips",
      price: 5000,
      favorite: true,
      star: 4.7,
      tags: ["SlowFood", "Lunch"],
      imageUrl: "./assets/images/chips.jpg",
      cookTime: "10-20",
      origins: ["italia", ]
    },
    {
      id: 4,
      name: "Nouille",
      price: 15000,
      favorite: true,
      star: 4.5,
      tags: ["FastFood", "nouille"],
      imageUrl: "./assets/images/nouille.jpg",
      cookTime: "20-30",
      origins: ["chine",]
    },
    {
      id: 5,
      name: "mini Kebab",
      price: 2500,
      favorite: false,
      star: 4.0,
      tags: ["FastFood", "kebab"],
      imageUrl: "./assets/images/kebab.jpg",
      cookTime: "25-30",
      origins: ["mexican"]
    },
    {
      id: 6,
      name: "Nem",
      price: 5000,
      favorite: true,
      star: 4.0,
      tags: ["LowFood", "nem"],
      imageUrl: "./assets/images/nem.jpg",
      cookTime: "40-50",
      origins: ["china"]
    },
    {
      id: 7,
      name: "hot dog",
      price: 1500,
      favorite: true,
      star: 4.5,
      tags: ["FastFood",],
      imageUrl: "./assets/images/hot dog.jpg",
      cookTime: "10-12",
      origins: ["Us"]
    },
    {
      id: 8,
      name: "smoothie fraise",
      price: 1500,
      favorite: false,
      star: 4.5,
      tags: ["fruity tea",],
      imageUrl: "./assets/images/smoothie2.jpg",
      cookTime: "05-10",
      origins: ["us"]
    },
    {
      id: 9,
      name: "sushi",
      price: 10000,
      favorite: false,
      star: 4.0,
      tags: ["chineese", ],
      imageUrl: "./assets/images/sushi.jpg",
      cookTime: "25-30",
      origins: ["chineese"]
    },
    {
      id: 10,
      name: "tacos",
      price: 5000,
      favorite: true,
      star: 4.0,
      tags: ["fast-food", "tacos"],
      imageUrl: "./assets/images/tacos3.jpg",
      cookTime: "40-50",
      origins: ["mexican"]
    },
    {
      id: 11,
      name: "jus",
      price: 1500,
      favorite: true,
      star: 4.5,
      tags: ["natural food",],
      imageUrl: "./assets/images/juice.jpg",
      cookTime: "10-12",
      origins: [""]
    },
    {
      id: 12,
      name: "Expresso",
      price: 2000,
      favorite: false,
      star: 4.5,
      tags: ["cofee",],
      imageUrl: "./assets/images/expresso2.jpg",
      cookTime: "05",
      origins: ["us"]
    }
  ];

  constructor() { }

  public getAll():Observable<Foods[]>{
    return of(this.foods);
  }

  public getFoodById(id: number): Observable<Foods>{
    let fd = this.foods.find(f => f.id == id);
    if (fd == undefined) return throwError(() => new Error("Foods undefined"));
    return of(fd);
  }

  public deleteProductById(id: number): Observable<boolean>{
    this.foods = this.foods.filter(p => p.id != id);
    return of(true);
  }

  public editFoodById(food: Foods): Observable<Foods>{
    this.foods = this.foods.map(f => (f.id == food.id) ? food : f);
    return of(food);
  }

}