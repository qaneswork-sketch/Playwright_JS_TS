import { Page, expect } from '@playwright/test';

export class Visit {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
    }
}