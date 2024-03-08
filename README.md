ProductListMartApp  
GitHub:- https://github.com/premnarayanp/ProductListMartApp.git  

Step & Points:-  
1- Refrence Link  
2- Project setUp  
3- Module installation  
4- Modules and Library/dependencies  
5- Functionality  
6- Screenshort  
7- Projects Structure
8- Approach/Methodology  

1:- Refrence Link:-  
1- React Nativ navigation Doc:- https://reactnavigation.org/docs/tab-based-navigation  
2- React Nativ NativBase Components Doc:- https://docs.nativebase.io/?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_3  


2:- Project setUp  
1-create Workspace folder like myWS    
2- npm install -g expo-cli    
3- expo init ProductListMartApp OR npx create-expo-app ProductListMartApp  
4- cd ProductListMartApp 5- npm run android OR npx expo start OR npm start  


3:- Module installation:-  
1-npm install react-native react-native-svg@12.1.1   
2-npm install @react-navigation/native   
3-npm install @react-navigation/native-stack   
4-npm install @react-navigation/drawer  
5-npm install @react-navigation/bottom-tabs  
6-npm install @react-navigation/material-top-tabs react-native-tab-view  
7-npm install react-native-reanimated@^3.6.2  
8-npm install react-native-gesture-handler@^2.14.0   
9-npm install react-native-safe-area-context   
10-npm  install react-nativ  
11-npm install react-native-snap-carousel   


4:- Modules and Library/dependencies  
{  
"name": "productlistmartapp",  
"version": "1.0.0",  
"main": "node_modules/expo/AppEntry.js",  
"scripts": {  
"start": "expo start",  
"android": "expo start --android",  
"ios": "expo start --ios",  
"web": "expo start --web"  
},    

"dependencies": {  
"@react-native-community/masked-view": "^0.1.11",  
"@react-navigation/bottom-tabs": "^6.5.12",  
"@react-navigation/drawer": "^6.6.7",  
"@react-navigation/material-top-tabs": "^6.6.6",  
"@react-navigation/native": "^6.1.10",  
"@react-navigation/native-stack": "^6.9.18",  
"expo": "~50.0.8", "expo-status-bar": "~1.11.1", 
"native-base": "^3.4.28",  
"react": "18.2.0",  
"react-native": "0.73.4",  
"react-native-gesture-handler": "^2.14.0",  
"react-native-pager-view": "6.2.3",  
"react-native-reanimated": "^3.6.2",  
"react-native-safe-area-context": "^4.8.2",   
"react-native-screens": "~3.29.0",  
"react-native-snap-carousel": "^3.9.1",  
"react-native-svg": "^12.1.1",  
"react-native-tab-view": "^3.5.2"  
},   

"devDependencies": {  
"@babel/core": "^7.20.0"     
},  
"private": true  
}  

5: Functionality  
1:-show Top Navigator and Searchbar and other menu.  
2:- Creat bottom Tab Bar and menu inside like Home,QRCode, etc.  
3:- Create Home Menu navigator that navigate Screens like Arrivals, PopularProducts, Recommended.  
4:- Create Carrousel Card to Show arrivals section inside Home page.  
5:- Create Popular Section Show popular products inside Home page.  
6:- Create Recommended to Show Recommended products inside Home page.     
7:- Add workable Custom Filter and Sorting components for Each section inside Home Page.  
8:- Add workable Custom Filter and Sorting components for Each Screen like arrivals /Recommended, And Popular and Show only Single section data inside separate Screen 
9:- Sorting and filtering with different base /using common components  

6: Screenshot : -  

1:- Home Page   
![Screenshot_20240307_102356](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/3a3734fb-708e-468d-ad81-6470676dc5b8)  

![Screenshot_20240307_102402](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/f456440b-9daa-46cb-b74a-316317f76133)

![Screenshot_20240307_102409](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/a957dc68-b7e6-45a2-a44f-5c673b014c92)  

![Screenshot_20240307_102414](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/634ab9d9-605c-483d-95a0-c60f2f737b69)  

![Screenshot_20240307_102419](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/f7dc4dca-0426-420b-ad76-31785a0467e0)  

2:- Sorting Dropdownlist  
![Screenshot_20240307_102432](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/0a5e3ad1-1661-442c-9a7d-564482c587b9)  

![Screenshot_20240307_102451](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/b1b5d138-0542-47ef-b175-850e4fd7f689)  



3:- Filtering Dropdownlist   
![Screenshot_20240307_102440](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/39aa2a26-6b18-4ec4-a72b-3fb6a38800ab)  


4:- Arrivalse Screen  
![Screenshot_20240307_102501](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/243dca67-6b69-4533-9d52-11ccfac8d43d)  


5.1:- Popular Products Screen  
![Screenshot_20240307_102509](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/de6d8505-a8a9-4cc3-847e-fc2d1cd4ca08)  

5.2:-Sorting DropdownList inside Popular Product Screens
![Screenshot_20240307_102515](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/9aa65bbc-ab1d-4fcc-927e-d1f3e38cf2e0)  

5.3:-Filtering DropdownList inside Popular Product Screens
![Screenshot_20240307_102522](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/5d3fe0a7-6f15-410c-91f9-ed57046e4d22)  

  
6.1:- Recommended Products Screen    
![Screenshot_20240307_102533](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/fbbbac93-4a69-4140-bf63-3ec791bb9726)  

6.2:- Recommended Products Screen  
![Screenshot_20240307_102536](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/7fb504f9-c859-46b7-82db-4adc24c044ad)  

6.3:-Sorting DropdownList inside Recommended Product Screens  
![Screenshot_20240307_102541](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/92ce6ad7-b887-4833-bd60-e8a022be6912)  

6.4:-Filtering DropdownList inside Recommended Product Screens  
![Screenshot_20240307_102548](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/2b583730-9a96-4c55-b76c-e4211f88f950)  

7.1 :- Bottom Tab Food Screen  
![Screenshot_20240307_102605](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/6685b7ca-36ca-4465-be87-3a8a337d2a58)  

7.2 :- Bottom Tab Packs Screen  
![Screenshot_20240307_102610](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/7defb6a0-795d-4856-b275-647fa6257d9b)  


7:- Projects Structure  
7.1- Main Structure   
![Screenshot 2024-03-08 155259](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/7f8c169c-9e30-4a2c-9dd5-cefa6a82e894)

7.2- src Structure   
![Screenshot 2024-03-08 155508](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/c83fb987-4b1b-4d53-abaf-550f38bb72aa)

7.3 - Components 
![Screenshot 2024-03-08 155552](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/31d8bfd6-ce30-4ef0-a47d-32c88f1f1b30)  

7.4:- Screens
![Screenshot 2024-03-08 155638](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/236ca2a5-e5a2-4085-b848-5efec617e8f8)

7.5: -bable.js  
![Screenshot 2024-03-08 155746](https://github.com/premnarayanp/ProductListMartApp/assets/124772915/2a68563d-54ad-4770-8d64-d9c0373161b8)


8:- Approach/Methodology  
1- First Used navigation as StackNavigator as Root   
2- After StackNavigator,s Default child is BottomTabNavigater  
3- After StackNavigator,s other childs are Screns as Arrivals ,Popular and Recommanded  
4- BottomTabs Default child is Home Screen  

5- There CarrouselCards used to show Arrivals section as with Carrousel effects  
All Arrivalse Components:- CarrouselCards -> CarrouselCardsItem(Show Carrousel Screen) -> ArrivalsItemCard(Show the Items logo)  

6- Common Components as Products Card is used to Show the products of Popular Products and Recommended products sedction inside Home Screen  
7- Also , Popular And Recommended section used common components as HeaderCard that used to open separate Screen For Each sections  
8- Another common Components as SortingAndFilter is used to filter and short the Products ,
So actualy SortingAndFilter  get 3 props as productList,originalProductList, and updateProductsState that is used to change the products state,so suppose i used the filter ,and after filter new products list pass inside updateProductsState callback that update when click.  
9:- SortingAndFilter internally used two custum function as customSorting and customFiltering that require some data ,and sort the item according to datas. Also used DropdownSheet  To show filter and sorting menu items.

10:- All Components used in Arrivals and Recommanded Screen that Show all data for particular single section with filter and sorting.


