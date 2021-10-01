<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      class="h-screen fixed mr-9"
    >
      <div
        class="logo flex justify-center items-center font-extrabold text-white"
      >
        <a-icon type="user" />
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a
            href="https://www.linkedin.com/in/apala-singh-a23818202/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a-icon type="linkedin" />
          <span>LinkedIn</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a
            href="https://github.com/ApalaS"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a-icon type="github" />
          <span>Github</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a
            href="https://www.instagram.com/apalaasingh/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a-icon type="instagram" />
          <span>Instagram</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="mail" />
          <span>apalasingh2001@gmail.com</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <div>
        <a-layout-header
          style="background: #eee; padding: 0"
          class="heading flex justify-between"
        >
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <div class="logo">
            <h2
              class="font-semibold text-7xl p-7 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            >
              Apala Singh
            </h2>
          </div>
        </a-layout-header>
      </div>
      <div class="flex justify-end">
        <a-layout-content
          class="bg-blue-300  bg-opacity-25 ml-28 m-8"
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <div class="flex justify-center items-start">
            <p class="intro text-xl ">
              Hi! I'm a Electronics and Communications undergrad from
              <a
                class="text-blue-600 "
                href="https://nie.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                >National Institute Of Engineering, Mysore'23.</a
              >
            </p>
          </div>
          <div class="flex justify-around items-start mt-9">
            <div
              class=" flex flex-col justify-start items-center p-9 m-9 shadow-xl bg-blue-100"
            >
              <h3 class="font-black text-2xl mb-4">What do I do?</h3>
              <p class="font-semibold text-xl">
                I like to make new projects to explore and learn new
                technologies,
              </p>
              <p class="font-semibold text-xl">
                I can help in existing projects too if needed.
              </p>
            </div>
            <img src="../assets/photoo.jpeg" class=" h-60 w-52" />
          </div>
          <div class="flex justify-around items-start mt-9">
            <div>
              <lottie-animation
                path="./animations/animation1.json"
                :loop="true"
                :autoPlay="true"
                :speed="1"
                :width="256"
                :height="256"
              />
            </div>
            <div
              class=" flex flex-col justify-start items-center p-9 m-9 shadow-xl bg-blue-100"
            >
              <h3 class="font-black text-2xl mb-4">More About Me</h3>
              <p class="font-semibold text-xl">
                what fascinated me towards learning Web Development was the fact
                that just <br />
                by writing a few lines of code you can make a whole WebApp
                functional.<br />
                Other than coding I love to travel, watch FRIENDS on repeat and
                my coffee.
              </p>
            </div>
          </div>
          <div class="flex justify-around items-start mt-9">
            <div
              class=" flex flex-col justify-start items-center p-9 m-9 shadow-xl bg-blue-100"
            >
              <h3 class="font-black text-2xl mb-4">Top Skills</h3>
              <ul class="list-inside bg-rose-200 font-semibold text-xl">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Vue.js</li>
                <li>Firebase</li>
                <li>C++</li>
              </ul>
            </div>
            <div>
              <lottie-animation
                path="./animations/animation2.json"
                :loop="true"
                :autoPlay="true"
                :speed="1"
                :width="360"
                :height="360"
              />
            </div>
          </div>
          <div class="flex justify-around items-start mt-9">
            <div>
              <lottie-animation
                path="./animations/animation3.json"
                :loop="true"
                :autoPlay="true"
                :speed="1"
                :width="256"
                :height="256"
              />
            </div>
            <div
              class=" flex flex-col justify-start items-center p-9 m-9 shadow-xl bg-blue-100"
            >
              <h3 class="font-black text-2xl mb-4">About My Projects</h3>
              <p class="font-semibold text-xl">
                I could go on and on explaining my personal projects<br />
                and some of the projects I've been working on as a part <br />
                of college team but I would like to save this topic for <br />
                our interview hehe.
              </p>
            </div>
          </div>

          <div class="resume font-semibold text-2xl m-6">
            <a
              href="apalasingh2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a-icon type="file-pdf" />
              <span>Download Resume</span>
            </a>
          </div>
          <div class="flex justify-center">
            <div
              class="font-bold text-4xl m-6 flex flex-col items-center justify-center mt-8 bg-gray-300 w-1/2 h-2/4 shadow-2xl"
            >
              <h3 class="mt-4">Contact Me</h3>
              <a-form
                :form="form"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 20 }"
                @submit="handleSubmit"
                class="mt-8"
              >
                <a-form-item label="Name">
                  <a-input
                    v-decorator="[
                      'name',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your name!',
                          },
                        ],
                      },
                    ]"
                    v-model="name"
                  />
                </a-form-item>
                <a-form-item label="Gender" class="mt-0">
                  <a-select
                    v-model="gender"
                    v-decorator="[
                      'gender',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please select your gender!',
                          },
                        ],
                      },
                    ]"
                  >
                    <a-select-option value="male">
                      male
                    </a-select-option>
                    <a-select-option value="female">
                      female
                    </a-select-option>
                    <a-select-option value="others">
                      others
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="Subject">
                  <a-input v-decorator="subject" v-model="subject" />
                </a-form-item>
                <a-form-item label="Email">
                  <a-input
                    v-model="email"
                    v-decorator="[
                      'email',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your email!',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <a-form-item label="Message">
                  <a-input
                    v-model="message"
                    v-decorator="[
                      'message',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your message!',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                  <a-button type="primary" html-type="submit">
                    Submit
                  </a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-layout-content>
      </div>

      <a-layout-footer
        class="flex justify-evenly items-center font-semibold text-lg bg-gray-400 ml-20"
      >
        <div class="flex flex-col justify-center items-center">
          <a-icon
            type="mail"
            style=" fontSize: 150%; color: '#08c'"
            theme="filled"
          />
          <h3>apalasingh2001@gmail.com</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <a-icon
            type="phone"
            style=" fontSize: 150%; color: '#08c'"
            theme="filled"
          />
          <h3>+91 9654077823</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <a-icon type="search" style=" fontSize: 150%; color: '#08c'" />
          <h3>Greater Noida, Uttar Pradesh</h3>
        </div>
      </a-layout-footer>
    </a-layout>
    <div>
      <a-back-top />
      <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
    </div>
  </a-layout>
</template>

<script>
import firebase from "../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      collapsed: true,
      form: null,
      formLayout: "horizontal",
      name: "",
      gender: "",
      subject: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const docRef = await addDoc(collection(firebase.db, "people"), {
        name: this.name,
        gender: this.gender,
        email: this.email,
        subject: this.subject,
        message: this.message,
      });
      console.log("Document written with ID: ", docRef.id);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Italianno&display=swap");

h2 {
  font-family: "Italianno", cursive;
  margin-bottom: 0px;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-header {
  height: 20vh !important;
}
.ant-layout-header .logo {
  width: fit-content;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0px 24px 16px 0;
  float: right;
}
.intro {
  color: var(--secondaryText);
  font-family: "Roboto Mono", monospace;
}
h3 {
  font-family: "Roboto Mono", monospace;
}
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
</style>
