import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CmsSearchBoxComponent, WindowRef, RoutingService } from "@spartacus/core";
import { SearchBoxConfig, SearchBoxComponent, CmsComponentData, SearchBoxComponentService } from "@spartacus/storefront";


const DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
  minCharactersBeforeRequest: 1,
  displayProducts: true,
  displaySuggestions: true,
  maxProducts: 5,
  maxSuggestions: 5,
  displayProductImages: true,
};

@Component({
  selector: 'cx-searchbox',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchBoxComponent extends SearchBoxComponent {
  constructor(searchBoxComponentService: SearchBoxComponentService,
    componentData: CmsComponentData<CmsSearchBoxComponent>,
    winRef: WindowRef,
    routingService: RoutingService) {
    super(searchBoxComponentService, componentData, winRef, routingService);
  }
}
