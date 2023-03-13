# Instructions to clone Union flow

1. Duplicate the iaff home page and name it according to the new convension
2. Make a new folder with the union flow name and duplicate all the other 14 pages in the folder from iaff (profile 1, account, checkout, thank you, our difference, .....)
3. On the home page of new union flow, unlink the navbar and footer instance and make changes like link and navimage update.
4. Make them new components in order to use it all along the flow.
5. Update form links, add redirections in the get started form via Project settings in order to pass union value as parameter in the URL.
6. Go on pages that contains help navbar, unlink the component and make changes. Make it a component again and use it along the pages. Help navbar is usually in the profiling and account, checkout related pages.
7. Update scripts in pages that already have <script src="from github with union flow name"></script>
8. Update careplan and careproudcts script. Add conditional redirection in the navbar and all 16 products for new pages. (Identifies keyword from link and redirects accordingly with k_uid). 
