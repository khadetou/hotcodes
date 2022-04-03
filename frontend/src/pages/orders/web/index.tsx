import { NextPage } from "next";

const OrderWeb: NextPage = () => {
  return (
    <div>
      <h1>Order</h1>
      <form action="">
        <label>Plateforme</label>
        <select name="plateforme">
          <option value="">--</option>
          <option value="website">Website</option>
          <option value="webapp">Webapp</option>
          <option value="pwa">PWA</option>
        </select>
        <label>Type</label>
        <select name="type">
          <option value="">--</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <label>Type of Website</label>
        <select name="typeOfWebsite">
          <option value="">--</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="blog">Blog</option>
          <option value="portfolio">Portfolio</option>
          <option value="enterrainment">Entertainement Website</option>
          <option value="media">Media website</option>
          <option value="elearning">ELearning website</option>
          <option value="infopreneur">Infopreneur website</option>
          <option value="web portal"> Web portal Website</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="type of app">Type of App</label>
        <input type="text" />
        <label htmlFor="">Enter your app description</label>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <h1>What is the goal? </h1>
        <label htmlFor=""> Select a goal</label>
        <select name="goal">
          <option value="">--</option>
          <option value="signin">Get people to signin for early access</option>
          <option value="showbenefit">
            Show benefits of using the plateforme
          </option>
          <option value="contact">
            A place for more information contact ...
          </option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="">Enter your goal description</label>
        <input type="text" />

        <h1>Add specifics functionalities </h1>
        <label htmlFor="">Select a functionnality</label>
        <input type="checkbox" name="blog" id="" />
        <input type="checkbox" name="newletters" id="" />
        <input type="checkbox" name="form-submition" id="" />
        <input type="checkbox" name="other" id="" />
        <label htmlFor="">Enter your functionnality description</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <button>Download Invoice</button>
      <h1>You already have a design share it with us</h1>
      <form action="">
        <label htmlFor="">Uplaod file</label>
        <input type="file" />
        <button type="submit">Submit</button>
      </form>

      <form action="">
        <label htmlFor="">Figma link</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <button>I DONT HAVE A DESIGN </button>
    </div>
  );
};

export default OrderWeb;
