import { invoke } from "@tauri-apps/api/tauri";

export class MyApp {
  public message = 'Hello Tauri World!';
  public name = 'Aurelia';

  constructor() {
    this.greet();
  }

  async greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    this.setGreetMsg(await invoke('greet', { name: this.name }));
  }

  setGreetMsg(msg: string) {
    this.message = msg;
  }
}