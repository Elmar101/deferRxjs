import { Component, OnInit } from "@angular/core";
import { defer, Observable, of, timer } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  obs$1: Observable<Date> = of(new Date());
  obs$2: Observable<Date> = defer(() => of(new Date()));

  ngOnInit(): void {
    this.obs$1.subscribe((data) => console.log("obs$1 is - ", data));

    timer(3000).subscribe((d) =>
      this.obs$1.subscribe((data) =>
        console.log("3 sanie sonra obs$1 is - ", data)
      )
    );

    this.obs$2.subscribe((data) => console.log("obs$2 is - ", data));

    timer(3000).subscribe((d) =>
      this.obs$2.subscribe((data) =>
        console.log("3 sanie sonra obs$2 is - ", data)
      )
    );
  }
}
