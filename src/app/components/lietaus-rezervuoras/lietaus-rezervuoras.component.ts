import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lietaus-rezervuoras',
  templateUrl: './lietaus-rezervuoras.component.html',
  styleUrls: ['./lietaus-rezervuoras.component.css'],
})
export class LietausRezervuorasComponent implements OnInit {
  public talpa: number | null = null;
  public pildymoGreitis: number | null = null;
  public laikas: number | null = null;
  public rezervuaras: number = 0;
  public tekstasWarning: string = '';
  public procent: string = '%';
  public emoji: string = '';

  constructor() {}

  ngOnInit(): void {}
  public skaiciuotiPildyma() {
    if (
      this.talpa != 0 &&
      this.talpa != null &&
      this.pildymoGreitis != null &&
      this.pildymoGreitis != 0 &&
      this.laikas != null &&
      this.laikas != 0
    ) {
      this.rezervuaras = Number(
        (((this.pildymoGreitis * this.laikas) / this.talpa) * 100).toFixed(2)
      );
    }
    if (this.rezervuaras >= 80) {
      this.tekstasWarning = 'rezervuaro talpa kritiškai pripildyta';
    }
    if (this.rezervuaras >= 100) {
      this.tekstasWarning = 'Talpa yra perpildyta.';
      this.emoji = '&#128554';
    }
    this.talpa = null;
    this.pildymoGreitis = null;
    this.laikas = null;
  }
}
