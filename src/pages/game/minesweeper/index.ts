import { ElMessage } from "element-plus";

interface MineConfig {
  rows?: number;
  cols?: number;
  mines?: number;
}
export class Minesweeper {
  private dpr: number = window.devicePixelRatio;
  private canvas!: HTMLElement;
  private ctx!: CanvasRenderingContext2D;
  private width: number = 900 * this.dpr;
  private height: number = 480 * this.dpr;
  private rows: number = 16;
  private cols: number = 30;
  private cellW: number = this.width / this.cols;
  private cellH: number = this.height / this.rows;
  private mines: number = 99;
  private colors: string[] = ['blue', 'green', 'red', 'darkblue', 'brown', 'lightseagreen', 'black', 'gray'];
  private grid = new Array<number[]>(this.rows).fill([]).map(() => new Array<number>(this.cols).fill(0));
  private show = new Array<string[]>(this.rows).fill([]).map(() => new Array<string>(this.cols).fill('*'));
  private mark = new Array<boolean[]>(this.rows).fill([]).map(() => new Array<boolean>(this.cols).fill(false));
  constructor(el: HTMLElement, width?: number, height?: number) {
    this.initCanvas(el);
    this.randomMine();
    this.cover();
  }
  private initCanvas(el: HTMLElement, width?: number, height?: number) {
    // const width: number = el.clientWidth;
    // const height: number = el.clientHeight;
    const canvas = document.createElement('canvas');
    canvas.style.width = `${this.width / this.dpr}px`;
    canvas.style.height = `${this.height / this.dpr}px`;
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.ctx = ctx;
    this.canvas = canvas;
    el.appendChild(canvas);
    this.mountEvent();
  }
  private mountEvent() {
    this.canvas.addEventListener('click', (e: MouseEvent) => this.onCellClick(e));
    this.canvas.addEventListener('contextmenu', (e: MouseEvent) => this.onMarkMine(e));
  }
  private onCellClick(event: MouseEvent) {
    const point: number[] = this.getPoint(event);
    const [row, col] = this.calcRowAndCol(point);
    if (this.checkIsMine(row, col)) {
      return ElMessage.error('踩到雷了');
    }
    this.drawCellMineCount(row, col);
  }
  private onSpread(row: number, col:  number) {
    const mineCount: number = this.calcCellMineCount(row, col);
    const minRow: number = Math.min(0, row - 1);
    const minCol: number = Math.min(0, col - 1);
    const maxRow: number = Math.max(row + 1, this.rows - 1);
    const maxCol: number = Math.max(col + 1, this.cols - 1);
    this.show[row][col] = `${mineCount}`;
    // 点击位置周围有雷
    if (mineCount !== 0) {
      
    } else {
      // 点击位置周围没有雷，递归
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          // 未展开
          if (this.show[i][j] === '*') {
            this.onSpread(i, j)
          }
        }
      } 
    }
  }
  private drawCellMineCount(row: number, col: number) {
    const mineCount: number = this.calcCellMineCount(row, col);
    // this.fillCell(col * this.cellW, row * this.cellH, this.cellW, this.cellH, '#fff');
    // this.drawText(`${mineCount}`, col * this.cellW  + this.cellW / 2, row * this.cellH + this.cellH / 2, this.colors[mineCount]);
    // this.initGridLine();
    console.log('mineCount', mineCount)
  }
  private calcCellMineCount(row: number, col: number) {
    let count: number = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i !== 0 || j !== 0) {
          if (this.grid[row + i] && this.grid[row + i][col + j]) {
            count += 1;
          }
        }
      }
    }
    return count;
  }
  private checkIsMine(row: number, col: number) {
    return !!this.grid[row][col];
  }
  private onMarkMine(event: MouseEvent) {

  }
  private calcRowAndCol([x, y]: number[]) {
    const col: number = Math.floor(x / this.cellW);
    const row: number = Math.floor(y / this.cellH);
    return [row, col];
  }
  private getPoint(event: MouseEvent) {
    const [x, y]: number[] = [event.pageX, event.pageY];
    const { left, top } = this.canvas.getBoundingClientRect();
    return [(x - left) * this.dpr, (y - top) * this.dpr];
  }
  private randomMine() {
    for (let i = 0; i < this.mines; i++) {
      let row: number = Math.floor(Math.random() * this.rows);
      let col: number = Math.floor(Math.random() * this.cols);
      while (this.grid[row][col]) {
        row = Math.floor(Math.random() * this.rows);
        col = Math.floor(Math.random() * this.cols);
      }
      this.grid[row][col] = 1;
    }
  }
  private initGridLine() {
    for (let i = 0; i <= this.rows; i++) {
      this.drawLine(0, i * this.cellH, this.width, i * this.cellH);
    }
    for (let i = 0; i <= this.cols; i++) {
      this.drawLine(i * this.cellW, 0, i * this.cellW, this.height);
    }
  }
  private drawLine(x1: number, y1: number, x2: number, y2: number) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineWidth = 4
    this.ctx.strokeStyle = '#ececec'
    this.ctx.stroke();
    this.ctx.closePath();
  }
  private cover() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.fillCell(j * this.cellW, i * this.cellH, this.cellW, this.cellH);
      }
    }
    this.initGridLine();
  }
  private fillCell(x: number, y: number, width: number, height: number, color: string = '#C0C0C0') {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.closePath();
  }
  private drawText(text: string, x: number, y: number, color: string) {
    this.ctx.beginPath();
    this.ctx.font = `${30}px 微软雅黑`
    this.ctx.textBaseline = 'middle'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = color
    this.ctx.fillText(text, x, y + 3)
    this.ctx.closePath();
  }
  private clearGrid() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = 0;
        this.show[i][j] = '*';
        this.mark[i][j] = false;
      }
    }
  }
  private unMountEvent() {
    this.canvas.removeEventListener('click', this.onCellClick);
    this.canvas.removeEventListener('contextmenu', this.onMarkMine);
  }
  distory() {
    this.clearGrid();
    this.unMountEvent();
  }
}