

# Courses App

The Courses App is a web application built with React that allows users to discover and manage their favorite courses. It integrates with the Supabase platform for authentication and data storage.

## Features

- **User Authentication**: Users can sign up, log in, and log out. User sessions are managed through Supabase authentication.

- **Favorite Courses**: Authenticated users can add and remove courses to/from their favorites list.

- **Browse Courses**: Users can browse and search for courses based on categories and course titles.

## Technologies Used

- React
- Supabase
- Material-UI

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Alitariq747/my-courses-app.git
   ```

2. Install dependencies:

   ```bash
   cd courses-app
   npm install
   ```

3. Configure Supabase:

   - Create a Supabase project and obtain the API URL and API key.
   - Update the Supabase configuration in the `supabase.js` file.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your web browser:

   ```bash
   http://localhost:3000
   ```

## Project Structure

- `/src`: Contains the source code for the React application.
  - `/components`: React components used in the app.
  - `/context`: Context providers for managing user favorites.
  - `/static`: Static assets such as images.
  - `/supabase.js`: Supabase client configuration.
- `/public`: Static assets and the HTML template.

## Contributing

Contributions are welcome! If you have any ideas for improvements or find any issues, please open an issue or submit a pull request.


---

