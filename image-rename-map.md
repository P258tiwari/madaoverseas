# Image Rename Map

This audit verifies the production image references currently used by the HTML pages. Existing referenced filenames are lowercase, hyphenated, and product/service descriptive. No broken image paths were found.

WebP conversion was not performed in this pass because neither ImageMagick (`magick`) nor WebP CLI (`cwebp`) is installed in the local environment. Before launch, convert the referenced JPG/PNG assets to WebP and update references using the same naming pattern, for example `cloves-madagascar-export-import-export.webp`.

| Old Image Name | New Image Name | Used In | Alt Text | Status |
| -------------- | -------------- | ------- | -------- | ------ |
| `cloves-banner.jpg` | `cloves-banner.jpg` | `index.html`, `pages/export/cloves.html` | Premium Madagascar cloves export / product hero | Verified referenced |
| `vanilla-stick.jpg` | `vanilla-stick.jpg` | `index.html`, `pages/export/vanilla.html` | Madagascar Bourbon vanilla beans export | Verified referenced |
| `kidney-beans-180.jpg` | `kidney-beans-180.jpg` | `index.html`, `pages/export/kidney-beans.html` | White kidney beans export from Madagascar | Verified referenced |
| `raw-cashew-ivory.jpg` | `raw-cashew-ivory.jpg` | `index.html`, `pages/export/raw-cashew.html` | Raw cashew nut export, Ivory Coast origin | Verified referenced |
| `cigarette-cassia.jpg` | `cigarette-cassia.jpg` | `index.html`, `pages/export/cinnamon.html` | Cinnamon and cassia export | Verified referenced |
| `mud-crab.jpg` | `mud-crab.jpg` | `index.html`, `pages/export/mud-crab.html` | Live and frozen mud crabs export | Verified referenced |
| `chrome-ore.jpg` | `chrome-ore.jpg` | `index.html`, `pages/export/minerals.html` | Chrome ore and copper ore export from Africa | Verified referenced |
| `basmati-rice.jpg` | `basmati-rice.jpg` | `index.html`, `pages/import/rice.html` | Basmati and parboiled rice import | Verified referenced |
| `white-sugar.jpg` | `white-sugar.jpg` | `index.html`, `pages/import/sugar.html` | ICUMSA white and brown cane sugar import | Verified referenced |
| `wheat-flour.jpg` | `wheat-flour.jpg` | `index.html`, `pages/import/wheat-flour.html` | Wheat flour import from India | Verified referenced |
| `stick-cassia.jpg` | `stick-cassia.jpg` | `pages/export/cinnamon.html` | Stick cassia cinnamon, 30-45cm length | Verified referenced |
| `split-cassia.jpg` | `split-cassia.jpg` | `pages/export/cinnamon.html` | Split cassia cinnamon | Verified referenced |
| `square-cut-cassia.jpg` | `square-cut-cassia.jpg` | `pages/export/cinnamon.html` | Square cut cassia | Verified referenced |
| `whole-cassia.jpg` | `whole-cassia.jpg` | `pages/export/cinnamon.html` | Whole cassia with skin | Verified referenced |
| `cloves-cg1.jpg` | `cloves-cg1.jpg` | `pages/export/cloves.html` | CG1 Superior grade Madagascar cloves | Verified referenced |
| `cloves-cg2.jpg` | `cloves-cg2.jpg` | `pages/export/cloves.html` | CG2 Clean grade Madagascar cloves | Verified referenced |
| `cloves-cg3.jpg` | `cloves-cg3.jpg` | `pages/export/cloves.html` | CG3 Standard grade Madagascar cloves | Verified referenced |
| `cloves-stems.jpg` | `cloves-stems.jpg` | `pages/export/cloves.html` | Clove stems with oil | Verified referenced |
| `kidney-beans-220.jpg` | `kidney-beans-220.jpg` | `pages/export/kidney-beans.html` | White kidney beans size 200-220 | Verified referenced |
| `kidney-beans-200.jpg` | `kidney-beans-200.jpg` | `pages/export/kidney-beans.html` | White kidney beans size 220-240 | Verified referenced |
| `chrome-ore-product.jpg` | `chrome-ore-product.jpg` | `pages/export/minerals.html` | Chromite ore product | Verified referenced |
| `copper-ore-product.jpg` | `copper-ore-product.jpg` | `pages/export/minerals.html` | Copper ore concentrate | Verified referenced |
| `male-green-crab.jpg` | `male-green-crab.jpg` | `pages/export/mud-crab.html` | Male green mud crabs Philippines | Verified referenced |
| `female-green-crab.jpg` | `female-green-crab.jpg` | `pages/export/mud-crab.html` | Female green mud crabs Philippines | Verified referenced |
| `bakla-virgin-crab.jpg` | `bakla-virgin-crab.jpg` | `pages/export/mud-crab.html` | Bakla virgin crabs Philippines | Verified referenced |
| `male-crab-madagascar.jpg` | `male-crab-madagascar.jpg` | `pages/export/mud-crab.html` | Male mud crabs Madagascar | Verified referenced |
| `female-crab-madagascar.jpg` | `female-crab-madagascar.jpg` | `pages/export/mud-crab.html` | Female mud crabs Madagascar | Verified referenced |
| `male-crab-bangladesh.jpg` | `male-crab-bangladesh.jpg` | `pages/export/mud-crab.html` | Male mud crabs Bangladesh | Verified referenced |
| `female-crab-bangladesh.jpg` | `female-crab-bangladesh.jpg` | `pages/export/mud-crab.html` | Female mud crabs Bangladesh | Verified referenced |
| `raw-cashew-tanzania.jpg` | `raw-cashew-tanzania.jpg` | `pages/export/raw-cashew.html` | Tanzania raw cashew | Verified referenced |
| `raw-cashew-madagascar.jpg` | `raw-cashew-madagascar.jpg` | `pages/export/raw-cashew.html` | Madagascar raw cashew | Verified referenced |
| `raw-cashew-vietnam.jpg` | `raw-cashew-vietnam.jpg` | `pages/export/raw-cashew.html` | Vietnam raw cashew | Verified referenced |
| `raw-cashew-indonesia.jpg` | `raw-cashew-indonesia.jpg` | `pages/export/raw-cashew.html` | Indonesia raw cashew | Verified referenced |
| `vanilla-beans.jpg` | `vanilla-beans.jpg` | `pages/export/vanilla.html` | Madagascar Bourbon vanilla beans | Verified referenced |
| `vanilla-powder-ref.jpg` | `vanilla-powder-ref.jpg` | `pages/export/vanilla.html` | Bourbon vanilla powder | Verified referenced |
| `swarna-5.jpg` | `swarna-5.jpg` | `pages/import/rice.html` | Swarna parboiled rice 5% broken | Verified referenced |
| `swarna-25.jpg` | `swarna-25.jpg` | `pages/import/rice.html` | Swarna parboiled rice 25% broken | Verified referenced |
| `sugar-45.jpg` | `sugar-45.jpg` | `pages/import/sugar.html` | Brazil ICUMSA 45 sugar | Verified referenced |
| `sugar-150.jpg` | `sugar-150.jpg` | `pages/import/sugar.html` | Brazil ICUMSA 100 sugar | Verified referenced |
| `sugar-100.jpg` | `sugar-100.jpg` | `pages/import/sugar.html` | Brazil ICUMSA 150 sugar | Verified referenced |
| `ind-brown-sugar.jpg` | `ind-brown-sugar.jpg` | `pages/import/sugar.html` | Raw brown cane sugar | Verified referenced |
| `bakery-plus.jpg` | `bakery-plus.jpg` | `pages/import/wheat-flour.html` | Bakery Plus wheat flour | Verified referenced |
| `bakery-plus-2.jpg` | `bakery-plus-2.jpg` | `pages/import/wheat-flour.html` | Standard wheat flour | Verified referenced |

## Unreferenced Assets To Review

These files are currently not referenced by HTML/CSS/JS. They were not deleted because they may be alternate product shots or retained source assets.

| Old Image Name | New Image Name | Used In | Alt Text | Status |
| -------------- | -------------- | ------- | -------- | ------ |
| `hero-bg-2.jpg` | `hero-bg-2.jpg` | Not currently used | N/A | Review before deleting |
| `home.jpg` | `home.jpg` | Not currently used | N/A | Review before deleting |
| `cinnamon-2.jpg` | `cinnamon-2.jpg` | Not currently used | N/A | Review before deleting |
| `cinnamon-powder.jpg` | `cinnamon-powder.jpg` | Not currently used | N/A | Review before deleting |
| `cinnamon-sticks.jpg` | `cinnamon-sticks.jpg` | Not currently used | N/A | Review before deleting |
| `baby-clove.jpg` | `baby-clove.jpg` | Not currently used | N/A | Review before deleting |
| `baby-clove-2.jpg` | `baby-clove-2.jpg` | Not currently used | N/A | Review before deleting |
| `cloves-product.jpg` | `cloves-product.jpg` | Not currently used | N/A | Review before deleting |
| `frozen-mud-crab.jpg` | `frozen-mud-crab.jpg` | Not currently used | N/A | Review before deleting |
| `mud-crab-product.jpg` | `mud-crab-product.jpg` | Not currently used | N/A | Review before deleting |
| `vanilla-powder.jpg` | `vanilla-powder.jpg` | Not currently used | N/A | Review before deleting |
| `vanilla-powder-alt.jpg` | `vanilla-powder-alt.jpg` | Not currently used | N/A | Review before deleting |
| `wheat-flour-2.jpg` | `wheat-flour-2.jpg` | Not currently used | N/A | Review before deleting |
