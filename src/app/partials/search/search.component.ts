import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'] // ✅ fixed
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters safely
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const term = paramMap.get('searchTerm'); // string | null
      if (term) {
        this.searchTerm = term;
      }
    });
  }

     search(value: string) {
    if (value.trim()) {
      this.router.navigate(['/search', value]);
    }
  }
}
