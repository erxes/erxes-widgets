import * as React from 'react';

const attrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#fff',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const iconPlus = (
  <svg {...attrs} width="20" className="icon" >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const iconLeft = (
  <svg {...attrs}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const iconRight = (
  <svg {...attrs} height="20">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const iconExit = (
  <svg {...attrs} width="18">
    <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5" />
    <polyline points="17 16 21 12 17 8" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const iconAttach = (
  <svg {...attrs} width="18" height="35" stroke="#686868">
    <path
      d="M21.44,11.05l-9.19,9.19a6,6,0,0,1-8.49-8.49l9.19-9.19a4,
      4,0,0,1,5.66,5.66L9.41,17.41a2,2,0,0,1-2.83-2.83L15.07,6.1"
    />
  </svg>
);

const iconClose = (
  <svg {...attrs} width="18">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const iconSearch = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="25">
    <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
  </svg>
);

const facebook = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0zNzMuMTU1LDIyNS41NDhoLTQ5Ljk2M1Y0MDYuODRoLTc0LjgwMlYyMjUuNTQ4SDIxMC45OVYxNjMuMDJoMzcuNDAxdi0zNy40MDIgICBjMC0yNi44MzgsNi4yODMtNDcuMTA3LDE4Ljg0My02MC44MTNjMTIuNTU5LTEzLjcwNiwzMy4zMDQtMjAuNTU1LDYyLjI0Mi0yMC41NTVoNDkuOTYzdjYyLjUyNmgtMzEuNDAxICAgYy0xMC42NjMsMC0xNy40NjcsMS44NTMtMjAuNDE3LDUuNTY4Yy0yLjk0OSwzLjcxMS00LjQyOCwxMC4yMy00LjQyOCwxOS41NTh2MzEuMTE5aDU2LjUzNEwzNzMuMTU1LDIyNS41NDh6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
const youtube = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICAgQzguMDQ1LDQwLjIwNywwLjAwMyw1OS41NzYsMC4wMDMsODIuMjI1djI3NC4wODRjMCwyMi42NDcsOC4wNDIsNDIuMDE4LDI0LjEyMyw1OC4xMDJjMTYuMDg0LDE2LjA4NCwzNS40NTQsMjQuMTI2LDU4LjEwMiwyNC4xMjYgICAgaDI3NC4wODRjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDJWODIuMjI1ICAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0yNTguOTU4LDYzLjM3OGgxOS4xM3Y3Ny42NTRjMCw0LjU3LDAuMDg5LDcuMDQ1LDAuMjgsNy40MjYgICAgYzAuMTkyLDMuMDQ2LDEuNzE5LDQuNTY3LDQuNTcyLDQuNTY3YzMuODA2LDAsNy44MDctMi45NDgsMTEuOTkxLTguODQ4VjYzLjM3OGgxOS4xM3YxMDUuNjM3aC0xOS4xM2gtMC4wMDd2LTExLjQyNSAgICBjLTcuODAzLDguNTYzLTE1LjEyOSwxMi44NS0yMS45OCwxMi44NWMtNi4wODgsMC0xMC4xODEtMi41NjgtMTIuMjc4LTcuNzA4Yy0xLjE0NC0zLjQyNC0xLjcwOC04LjY2LTEuNzA4LTE1LjcwNFY2My4zNzggICAgTDI1OC45NTgsNjMuMzc4eiBNMTg2LjcyNSw5Ny42NGMwLTExLjAzOCwxLjk5OS0xOS4zMiw1Ljk5Ni0yNC44MzhjNS4xMzgtNy4yMzIsMTIuNTU5LTEwLjg1LDIyLjI2Ni0xMC44NSAgICBjOS4zMjksMCwxNi43NTQsMy42MjEsMjIuMjY4LDEwLjg1YzQsNS41MTksNS45OTksMTMuOCw1Ljk5OSwyNC44Mzh2MzcuMTE3YzAsMTEuNDIxLTEuOTk5LDE5LjcwMS01Ljk5OSwyNC44MzkgICAgYy01LjUxNCw3LjIzNi0xMi45MzksMTAuODUyLTIyLjI2OCwxMC44NTJjLTkuNzA3LDAtMTcuMTI4LTMuNjE5LTIyLjI2Ni0xMC44NTJjLTMuOTk3LTUuNTItNS45OTYtMTMuOC01Ljk5Ni0yNC44MzlWOTcuNjR6ICAgICBNMTM1LjMzMSwyNy4xMTlsMTUuMTMzLDU1LjY3N2wxNC41Ni01NS42NzdoMjEuNDE0bC0yNS42OTcsODQuNTFoMC4wMDR2NTcuMzg2aC0yMS4xMjd2LTU3LjM4NiAgICBjLTIuMDk2LTEwLjQ2OC02LjQ3My0yNS41MDUtMTMuMTM0LTQ1LjEwOGMtNC4zNzctMTMuMTM0LTYuNTY3LTE5LjcwMS02LjU2Ny0xOS43MDFsLTYuODU1LTE5LjcwMUgxMzUuMzMxTDEzNS4zMzEsMjcuMTE5eiAgICAgTTM3MC41OTMsMzcxLjcyOWMtMS45MDMsOC4xOC01Ljk0OCwxNS4xMjYtMTIuMTM5LDIwLjg0MmMtNi4xODEsNS43MDgtMTMuMzYzLDkuMDQxLTIxLjU1LDkuOTk2ICAgIGMtMjYuMDczLDIuODUxLTY1LjI4OCw0LjI4LTExNy42MjgsNC4yOGMtNTIuMzQ0LDAtOTEuNTUzLTEuNDMtMTE3LjYyOC00LjI4Yy04LjE4My0wLjk1NS0xNS4zNjctNC4yODgtMjEuNTU1LTkuOTk2ICAgIGMtNi4xODYtNS43MTYtMTAuMjI5LTEyLjY2Mi0xMi4xMzMtMjAuODQyYy0zLjgwNS0xNS45OTEtNS43MDgtNDAuNzM3LTUuNzA4LTc0LjIzM2MwLTMyLjkzNSwxLjkwMy01Ny42Nyw1LjcwOC03NC4yMzMgICAgYzEuOTA1LTguMzc1LDUuOTQ4LTE1LjM3MSwxMi4xMzMtMjAuOTg4YzYuMTg4LTUuNjE3LDEzLjQ2Ni04LjkwMSwyMS44NDItOS44NTFjMjUuODgyLTIuODU5LDY0Ljk5Ny00LjI4NCwxMTcuMzQxLTQuMjg0ICAgIGM1Mi41MzUsMCw5MS43NDYsMS40MjksMTE3LjYyOCw0LjI4NGM4LjE4NywwLjk1MywxNS40MSw0LjIzMywyMS42OTMsOS44NTFjNi4yODMsNS42MTQsMTAuMzgsMTIuNjA5LDEyLjI4MiwyMC45ODggICAgYzMuNjEsMTUuNzk3LDUuNDIxLDQwLjUzOSw1LjQyMSw3NC4yMzNDMzc2LjMwMSwzMzAuOTkxLDM3NC4zOTcsMzU1LjczMywzNzAuNTkzLDM3MS43Mjl6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBvbHlnb24gcG9pbnRzPSI4NS42NTEsMjQ0LjY3OCAxMDcuOTIxLDI0NC42NzggMTA3LjkyMSwzNjUuNDQ1IDEyOS4wNDgsMzY1LjQ0NSAxMjkuMDQ4LDI0NC42NzggMTUxLjg4OSwyNDQuNjc4ICAgICAxNTEuODg5LDIyNC42OTIgODUuNjUxLDIyNC42OTIgICAiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMTkwLjE0OSwzNDAuNjA3Yy00LjE4Nyw1Ljg5Ni04LjE4Niw4Ljg0Ny0xMS45OTEsOC44NDdjLTIuNjY1LDAtNC4wOTMtMS40MjctNC4yODMtNC4yODEgICAgYy0wLjE5MS0wLjM4LTAuMjg3LTIuODU0LTAuMjg3LTcuNDI2di03Ny4wODhoLTE4Ljg0M3Y4Mi43OTZjMCw3LjIzNCwwLjU3MiwxMi4zNzQsMS43MTUsMTUuNDEzICAgIGMxLjcxMiw1LjMzMiw1LjcxMSw3Ljk5NCwxMS45OTEsNy45OTRjNy4wNDIsMCwxNC4yNzUtNC4yODEsMjEuNjk4LTEyLjg0N3YxMS40MjRoMTkuMTI2VjI2MC42NjZoLTE5LjEyNlYzNDAuNjA3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik0yNjQuMDk5LDI1OS4yMzVjLTYuODUyLDAtMTMuMzI2LDMuODA2LTE5LjQxMSwxMS40MjN2LTQ1Ljk2NmgtMTkuMTN2MTQwLjc1M2gxOS4xM3YtMTAuMjc5ICAgIGM2LjI3Niw3LjgwMiwxMi43NTUsMTEuNzAzLDE5LjQxMSwxMS43MDNjNy44MDYsMCwxMi44NDctMy45OTcsMTUuMTI2LTExLjk5MWMxLjMzNC0zLjk5NywxLjk5OC0xMC45NDQsMS45OTgtMjAuODQxdi00MS42ODIgICAgYzAtMTAuMDg5LTAuNjcxLTE3LjEzMi0xLjk5OC0yMS4xMjlDMjc2Ljk0NSwyNjMuMjMyLDI3MS45MDQsMjU5LjIzNSwyNjQuMDk5LDI1OS4yMzV6IE0yNjIuMzg0LDMzNS40NjggICAgYzAsOS4zMjUtMi43NTgsMTMuOTgyLTguMjgxLDEzLjk4OWMtMy4yMywwLTYuMzc2LTEuNTI1LTkuNDIyLTQuNTcxdi02My45NTRjMy4wNDYtMy4wMzgsNi4xOTEtNC41NjQsOS40MjItNC41NjQgICAgYzUuNTIzLDAsOC4yODEsNC43NTMsOC4yODEsMTQuMjcxVjMzNS40Njh6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTMzMy40NjYsMzM1LjMyNGMwLDEuOTk4LTAuMDQ5LDMuNTY1LTAuMTM3LDQuNzA5Yy0wLjA5MywxLjE0My0wLjE0NSwxLjgxLTAuMTQ1LDEuOTk4ICAgIGMtMS4xNCw0Ljk0NS0zLjk5Nyw3LjQxOS04LjU2NSw3LjQxOWMtNi40NzIsMC05LjcwOS00Ljg1My05LjcwOS0xNC41NTh2LTE4LjU1NWgzNy45NzN2LTIxLjcwMyAgICBjMC0xMS4wMzctMS45OTUtMTkuMjE5LTUuOTk1LTI0LjU1MWMtNS4xMzQtNy4yMzEtMTIuNTYtMTAuODUyLTIyLjI2OS0xMC44NTJzLTE3LjMxOSwzLjYyLTIyLjg0MywxMC44NTIgICAgYy0zLjgwNiw1LjE0LTUuNzA4LDEzLjMyOS01LjcwOCwyNC41NTF2MzYuODMyYzAsMTEuMjMxLDEuOTk4LDE5LjQxOCw1Ljk5NSwyNC41NThjNS41MjMsNy4yMzEsMTMuMjMsMTAuODUyLDIzLjEzMSwxMC44NTIgICAgYzEwLjA4OCwwLDE3LjY5OS0zLjgwNiwyMi44NDMtMTEuNDIzYzIuMjgyLTMuNDI5LDMuNzE2LTcuMjM0LDQuMjg0LTExLjQyYzAuMzc3LTIuNjY2LDAuNTY4LTYuNzU5LDAuNTY4LTEyLjI3OHYtMi41NjN2LTAuMDA3ICAgIGgtMTkuNDE3djYuMTRIMzMzLjQ2NnogTTMxNC45MTcsMjkwLjkyNWMwLTkuNzA1LDMuMTQyLTE0LjU1OCw5LjQyMi0xNC41NThjNi4yODMsMCw5LjQyMSw0Ljg1Myw5LjQyMSwxNC41NTh2OS43MTJoLTE4Ljg0MyAgICBWMjkwLjkyNXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMjE0Ljk4NywxNTMuMDI1YzYuMDkxLDAsOS4xMzUtNC44NTEsOS4xMzUtMTQuNTU4di00NC41NGMwLTkuODk1LTMuMDQ0LTE0Ljg0Ny05LjEzNS0xNC44NDcgICAgYy02LjA5LDAtOS4xMzUsNC45NTItOS4xMzUsMTQuODQ3djQ0LjU0QzIwNS44NTIsMTQ4LjE3MSwyMDguODk3LDE1My4wMjUsMjE0Ljk4NywxNTMuMDI1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
const link = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0zNjUuNDQ5LDIyOC40MDJjMCw3Ljk5NC0zLjcxNywxMy42MDYtMTEuMTM2LDE2Ljg0NCAgIGMtMi40NzEsMC45NTEtNC44NTksMS40MjctNy4xMzksMS40MjdjLTUuMTM0LDAtOS40MTgtMS44MTEtMTIuODQ3LTUuNDI0bC00MS4xMS00MS4xMTJMMTQwLjc2NCwzNTIuNTk5ICAgYy0zLjYyMSwzLjYxNC03LjksNS40MjUtMTIuODUsNS40MjVjLTQuOTUyLDAtOS4yMzUtMS44MTEtMTIuODUxLTUuNDI1bC0yOS4xMjEtMjkuMTI2Yy0zLjYxNy0zLjYxLTUuNDI2LTcuOTAxLTUuNDI2LTEyLjg0NyAgIGMwLTQuOTQ0LDEuODA5LTkuMjI5LDUuNDI2LTEyLjg0M2wxNTIuNDYyLTE1Mi40NjRsLTQxLjExMy00MS4xMTJjLTUuOTAyLTUuNTItNy4yMzMtMTIuMTc4LTMuOTk5LTE5Ljk4NSAgIGMzLjIzNC03LjQyMSw4Ljg1Mi0xMS4xMzYsMTYuODQ2LTExLjEzNmgxMzcuMDM3YzQuOTQ4LDAsOS4yMzIsMS44MSwxMi44NTQsNS40MjhjMy42MTMsMy42MTQsNS40MjEsNy44OTgsNS40MjEsMTIuODQ3VjIyOC40MDJ6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
const linkedin = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0xMzMuNjE4LDM2Ny4xNTdINjcuNjY2VjE2OS4wMTZoNjUuOTUyVjM2Ny4xNTd6IE0xMjcuNjI2LDEzMi4zMzIgICBjLTYuODUxLDYuNTY3LTE1Ljg5Myw5Ljg1MS0yNy4xMjQsOS44NTFoLTAuMjg4Yy0xMC44NDgsMC0xOS42NDgtMy4yODQtMjYuNDA3LTkuODUxYy02Ljc2LTYuNTY3LTEwLjEzOC0xNC43MDMtMTAuMTM4LTI0LjQxICAgYzAtOS44OTcsMy40NzYtMTguMDgzLDEwLjQyMS0yNC41NTZjNi45NS02LjQ3MSwxNS45NDItOS43MDgsMjYuOTgtOS43MDhjMTEuMDM5LDAsMTkuODksMy4yMzcsMjYuNTUzLDkuNzA4ICAgYzYuNjYxLDYuNDczLDEwLjA4OCwxNC42NTksMTAuMjc3LDI0LjU1NkMxMzcuODk5LDExNy42MjUsMTM0LjQ3NywxMjUuNzYxLDEyNy42MjYsMTMyLjMzMnogTTM3MC44NzMsMzY3LjE1N2gtNjUuOTUydi0xMDUuOTIgICBjMC0yOS44NzktMTEuMDM2LTQ0LjgyMy0zMy4xMTYtNDQuODIzYy04LjM3NCwwLTE1LjQyLDIuMzMxLTIxLjEyOCw2Ljk5NWMtNS43MTUsNC42NjEtOS45OTYsMTAuMzI0LTEyLjg0NywxNi45OTEgICBjLTEuMzM1LDMuNDIyLTEuOTk5LDguNzUtMS45OTksMTUuOTgxdjExMC43NzVoLTY1Ljk1MmMwLjU3MS0xMTkuNTI5LDAuNTcxLTE4NS41NzksMC0xOTguMTQyaDY1Ljk1MnYyNy45NzQgICBjMTMuODY3LTIxLjY4MSwzMy41NTgtMzIuNTQ0LDU5LjEwMS0zMi41NDRjMjIuODQsMCw0MS4yMSw3LjUyLDU1LjEwNCwyMi41NTRjMTMuODk1LDE1LjAzNywyMC44NDEsMzcuMjE0LDIwLjg0MSw2Ni41MTl2MTEzLjY0ICAgSDM3MC44NzN6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='; 
const twitter = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0zMzUuNDcxLDE2OC43MzVjMC4xOTEsMS43MTMsMC4yODgsNC4yNzgsMC4yODgsNy43MSAgIGMwLDE1Ljk4OS0yLjMzNCwzMi4wMjUtNi45OTUsNDguMTA0Yy00LjY2MSwxNi4wODctMTEuOCwzMS41MDQtMjEuNDE2LDQ2LjI1NGMtOS42MDYsMTQuNzQ5LTIxLjA3NCwyNy43OTEtMzQuMzk2LDM5LjExNSAgIGMtMTMuMzI1LDExLjMyLTI5LjMxMSwyMC4zNjUtNDcuOTY4LDI3LjExN2MtMTguNjQ4LDYuNzYyLTM4LjYzNywxMC4xNDMtNTkuOTUzLDEwLjE0M2MtMzMuMTE2LDAtNjMuNzYtOC45NTItOTEuOTMxLTI2LjgzNiAgIGM0LjU2OCwwLjU2OCw5LjMyOSwwLjg1NSwxNC4yNzUsMC44NTVjMjcuNiwwLDUyLjQzOS04LjU2NSw3NC41MTktMjUuN2MtMTIuOTQxLTAuMTg1LTI0LjUwNi00LjE3OS0zNC42ODgtMTEuOTkxICAgYy0xMC4xODUtNy44MDMtMTcuMjczLTE3LjY5OS0yMS4yNzEtMjkuNjkxYzQuOTQ3LDAuNzYsOC42NTgsMS4xMzcsMTEuMTMyLDEuMTM3YzQuMTg3LDAsOS4wNDItMC43NiwxNC41Ni0yLjI3OSAgIGMtMTMuODk0LTIuNjY5LTI1LjU5OC05LjU2Mi0zNS4xMTUtMjAuNjk3Yy05LjUxOS0xMS4xMzYtMTQuMjc3LTIzLjg0LTE0LjI3Ny0zOC4xMTR2LTAuNTcxICAgYzEwLjA4NSw0Ljc1NSwxOS42MDIsNy4yMjksMjguNTQ5LDcuNDIyYy0xNy4zMjEtMTEuNjEzLTI1Ljk4MS0yOC4yNjUtMjUuOTgxLTQ5Ljk2M2MwLTEwLjY2LDIuNzU4LTIwLjc0Nyw4LjI3OC0zMC4yNjQgICBjMTUuMDM1LDE4LjQ2NCwzMy4zMTEsMzMuMjEzLDU0LjgxNiw0NC4yNTJjMjEuNTA3LDExLjAzOCw0NC41NCwxNy4yMjcsNjkuMDkyLDE4LjU1OGMtMC45NS0zLjYxNi0xLjQyNy04LjE4Ni0xLjQyNy0xMy43MDQgICBjMC0xNi41NjIsNS44NTMtMzAuNjkyLDE3LjU2LTQyLjM5OWMxMS43MDMtMTEuNzA2LDI1LjgzNy0xNy41NjEsNDIuMzk0LTE3LjU2MWMxNy41MTUsMCwzMi4wNzksNi4yODMsNDMuNjg4LDE4Ljg0NiAgIGMxMy4xMzQtMi40NzQsMjUuODkyLTcuMzMsMzguMjYtMTQuNTZjLTQuNzU3LDE0LjY1Mi0xMy42MTMsMjUuNzg4LTI2LjU1LDMzLjQwMmMxMi4zNjgtMS43MTYsMjMuODgtNC45NSwzNC41MzctOS43MDggICBDMzU3LjQ1OCwxNDkuNzkzLDM0Ny40NjIsMTYwLjE2NiwzMzUuNDcxLDE2OC43MzV6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
const github = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE1OC4xNzMsMzUyLjU5OWMtMy4wNDksMC41NjgtNC4zODEsMS45OTktMy45OTksNC4yODFjMC4zOCwyLjI4MywyLjA5MywzLjA0Niw1LjEzOCwyLjI4MyAgICBjMy4wNDktMC43Niw0LjM4LTIuMDk1LDMuOTk3LTMuOTk3QzE2Mi45MzEsMzUzLjA3NCwxNjEuMjE4LDM1Mi4yMTYsMTU4LjE3MywzNTIuNTk5eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik0xNDEuODk4LDM1NC44ODVjLTMuMDQ2LDAtNC41NjgsMS4wNDEtNC41NjgsMy4xMzljMCwyLjQ3NCwxLjYxOSwzLjUxOCw0Ljg1MywzLjEzOGMzLjA0NiwwLDQuNTctMS4wNDcsNC41Ny0zLjEzOCAgICBDMTQ2Ljc1MywzNTUuNTUzLDE0NS4xMzQsMzU0LjUwMiwxNDEuODk4LDM1NC44ODV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTExOS42MjksMzU0LjAyMmMtMC43NiwyLjA5NSwwLjQ3OCwzLjUxOSwzLjcxMSw0LjI4NGMyLjg1NSwxLjEzNyw0LjY2NCwwLjU2OCw1LjQyNC0xLjcxNCAgICBjMC41NzItMi4wOTEtMC42NjYtMy42MS0zLjcxMS00LjU2OEMxMjIuMTk3LDM1MS4yNjUsMTIwLjM5LDM1MS45MjIsMTE5LjYyOSwzNTQuMDIyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik00MTQuNDEsMjQuMTIzQzM5OC4zMjYsOC4wNDIsMzc4Ljk2NCwwLDM1Ni4zMDksMEg4Mi4yMjVDNTkuNTc3LDAsNDAuMjA4LDguMDQyLDI0LjEyMywyNC4xMjMgICAgQzguMDQyLDQwLjIwNywwLDU5LjU3NiwwLDgyLjIyNXYyNzQuMDg4YzAsMjIuNjUsOC4wNDIsNDIuMDE3LDI0LjEyMyw1OC4wOThjMTYuMDg0LDE2LjA4NCwzNS40NTQsMjQuMTI2LDU4LjEwMiwyNC4xMjZoNjMuOTUzICAgIGM0LjE4NCwwLDcuMzI3LTAuMTQ0LDkuNDItMC40MjRjMi4wOTItMC4yODgsNC4xODQtMS41MjYsNi4yNzktMy43MTdjMi4wOTYtMi4xODcsMy4xNC01LjM3NiwzLjE0LTkuNTYyICAgIGMwLTAuNTY4LTAuMDUtNy4wNDYtMC4xNDQtMTkuNDE3Yy0wLjA5Ny0xMi4zNzUtMC4xNDQtMjIuMTc2LTAuMTQ0LTI5LjQxbC02LjU2NywxLjE0M2MtNC4xODcsMC43Ni05LjQ2OSwxLjA5NS0xNS44NDYsMC45OTkgICAgYy02LjM3NC0wLjA5Ni0xMi45OS0wLjc2LTE5Ljg0MS0xLjk5OGMtNi44NTUtMS4yMzktMTMuMjI5LTQuMDkzLTE5LjEzLTguNTYyYy01Ljg5OC00LjQ3Ny0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1OSAgICBsLTIuODU2LTYuNTcxYy0xLjkwMy00LjM3My00Ljg5OS05LjIyOS04Ljk5Mi0xNC41NTRjLTQuMDkzLTUuMzMyLTguMjMyLTguOTQ5LTEyLjQxOS0xMC44NTJsLTEuOTk5LTEuNDI4ICAgIGMtMS4zMzEtMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQxLTEuMzM1LTEuOTk3LTIuNjY5LTIuNTY4LTMuOTk3Yy0wLjU3MS0xLjMzNS0wLjA5Ny0yLjQzLDEuNDI3LTMuMjg5ICAgIGMxLjUyNC0wLjg1NSw0LjI4MS0xLjI3OSw4LjI4LTEuMjc5bDUuNzA4LDAuODU1YzMuODA4LDAuNzYsOC41MTYsMy4wNDIsMTQuMTM0LDYuODUxYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQzICAgIGM0LjM4LDcuODA2LDkuNjU3LDEzLjc1LDE1Ljg0NiwxNy44NDNjNi4xODQsNC4wOTcsMTIuNDE5LDYuMTQzLDE4LjY5OSw2LjE0M3MxMS43MDQtMC40NzYsMTYuMjc0LTEuNDI0ICAgIGM0LjU2NS0wLjk1NCw4Ljg0OC0yLjM4NSwxMi44NDctNC4yODhjMS43MTMtMTIuNzUxLDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDFjLTEwLjg0OC0xLjE0My0yMC42MDItMi44NTQtMjkuMjY1LTUuMTQgICAgYy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTUtMjYuODM1LTExLjEzNmMtOS4yMzQtNS4xNC0xNi44OTQtMTEuNTEyLTIyLjk4NS0xOS4xM2MtNi4wOS03LjYxOC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OCAgICBjLTMuOTAxLTEyLjM3NS01Ljg1Mi0yNi42NTItNS44NTItNDIuODI5YzAtMjMuMDI5LDcuNTIxLTQyLjYzNywyMi41NTctNTguODE0Yy03LjA0NC0xNy4zMi02LjM3OS0zNi43MzIsMS45OTctNTguMjQyICAgIGM1LjUyLTEuNzE0LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTVjMTAuODUsNC4yODYsMTguNzk0LDcuOTUxLDIzLjg0LDEwLjk5MmM1LjA0NiwzLjA0Miw5LjA4OSw1LjYxNCwxMi4xMzUsNy43MSAgICBjMTcuNzA1LTQuOTQ5LDM1Ljk3Ni03LjQyMyw1NC44MTgtNy40MjNjMTguODQxLDAsMzcuMTE1LDIuNDc0LDU0LjgyMSw3LjQyM2wxMC44NDktNi44NTJjNy40MjYtNC41NywxNi4xOC04Ljc1NywyNi4yNjktMTIuNTYyICAgIGMxMC4wODgtMy44MDYsMTcuNzk1LTQuODU0LDIzLjEyNy0zLjE0YzguNTYyLDIxLjUxLDkuMzI4LDQwLjkyMiwyLjI3OSw1OC4yNDFjMTUuMDM2LDE2LjE3OSwyMi41NTksMzUuNzg2LDIyLjU1OSw1OC44MTUgICAgYzAsMTYuMTgtMS45NTEsMzAuNTA1LTUuODUyLDQyLjk2OWMtMy44OTgsMTIuNDY3LTguOTM5LDIyLjQ2My0xNS4xMywyOS45ODFjLTYuMTg0LDcuNTE5LTEzLjg5NCwxMy44NDMtMjMuMTI0LDE4Ljk4NiAgICBjLTkuMjMyLDUuMTM3LTE4LjE3OCw4Ljg1My0yNi44NCwxMS4xMzJjLTguNjYxLDIuMjg2LTE4LjQxNCw0LjAwNC0yOS4yNjMsNS4xNDdjOS44OTEsOC41NjIsMTQuODM5LDIyLjA3MiwxNC44MzksNDAuNTM4djY4LjIzOCAgICBjMCwzLjIzNywwLjQ3Miw1Ljg1MiwxLjQyNCw3Ljg1MWMwLjk1OCwxLjk5OCwyLjQ3OCwzLjM3NCw0LjU3MSw0LjE0MWMyLjEwMiwwLjc2LDMuOTQ5LDEuMjM1LDUuNTcxLDEuNDI0ICAgIGMxLjYyMiwwLjE5MSwzLjk0OSwwLjI4Nyw2Ljk5NSwwLjI4N2g2My45NTNjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDIgICAgVjgyLjIyNUM0MzguNTMzLDU5LjU3Niw0MzAuNDkxLDQwLjIwNCw0MTQuNDEsMjQuMTIzeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik04Ni43OTMsMzE5LjE5NWMtMS4zMzEsMC45NDgtMS4xNDEsMi40NzEsMC41NzIsNC41NjVjMS45MDYsMS45MDIsMy40MjcsMi4xODksNC41NywwLjg1NSAgICBjMS4zMzEtMC45NDgsMS4xNDEtMi40NzEtMC41NzUtNC41NjlDODkuNDU4LDMxOC4zMzYsODcuOTM2LDMxOC4wNDksODYuNzkzLDMxOS4xOTV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTc3LjM3NCwzMTIuMDU3Yy0wLjU3LDEuMzM1LDAuMDk2LDIuNDc4LDEuOTk5LDMuNDI2YzEuNTIxLDAuOTU1LDIuNzYyLDAuNzY3LDMuNzExLTAuNTY4ICAgIGMwLjU3LTEuMzM1LTAuMDk2LTIuNDc4LTEuOTk5LTMuNDMzQzc5LjE4MiwzMTAuOTEsNzcuOTQ1LDMxMS4xMDIsNzcuMzc0LDMxMi4wNTd6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTk1LjY0NiwzMzAuMzMxYy0xLjcxNSwwLjk0OC0xLjcxNSwyLjY2NiwwLDUuMTM3YzEuNzEzLDIuNDc4LDMuMzI4LDMuMTQyLDQuODUzLDEuOTk4YzEuNzE0LTEuMzM0LDEuNzE0LTMuMTQyLDAtNS40MjcgICAgQzk4Ljk3OCwzMjkuNTcxLDk3LjM1OSwzMjguOTkzLDk1LjY0NiwzMzAuMzMxeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik0xMDUuNjQxLDM0My4xNzRjLTEuNzE0LDEuNTI2LTEuMzM2LDMuMzI3LDEuMTQyLDUuNDI4YzIuMjgxLDIuMjc5LDQuMTg1LDIuNTY2LDUuNzA4LDAuODQ5ICAgIGMxLjUyNC0xLjUxOSwxLjE0My0zLjMyNi0xLjE0Mi01LjQyQzEwOS4wNjgsMzQxLjc1MSwxMDcuMTY0LDM0MS40NjMsMTA1LjY0MSwzNDMuMTc0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';

const defaultAvatar = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><style>.st2{fill:#e6af78}.st5{fill:#f0c087}.st6{fill:#2e255e}</style><circle cx="256.8" cy="256.7" r="255.3" fill="#eee"/><g id="Layer_1_1_"><defs><circle id="SVGID_1_" cx="256.7" cy="256.7" r="255.3"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><path class="st2" d="M326 380v-54H187.4v54l69.3 61.6z"/><path d="M433.2 405.2l-95.3-22.4c-1.4-.3-2.7-.9-4-1.6l-77.2 45-74.2-47.2c-2 1.9-4.4 3.2-7 3.8l-95.3 22.4c-13.9 3.3-23.8 15.7-23.8 30v60.3c0 8.5 6.9 15.4 15.4 15.4h369.7c8.5 0 15.4-6.9 15.4-15.4v-60.3c.1-14.3-9.7-26.7-23.7-30z" fill="#392a6f"/><path d="M187.4 326v56.9c87.3 31.5 138.6-47.3 138.6-47.3V326H187.4z" fill="#d29b6e"/><path class="st5" d="M156.6 148.9l6.7 147.7c.6 13.8 7.4 26.6 18.4 34.9l31.9 23.9c8 6 17.7 9.2 27.7 9.2h30.8c10 0 19.7-3.2 27.7-9.2l31.9-23.9c11-8.3 17.8-21.1 18.4-34.9l6.7-147.7H156.6z"/><path class="st2" d="M233.6 179.7c30.8 0 77-7.7 88-30.8h-165l6.7 147.7c.6 13.8 7.4 26.6 18.4 34.9l31.9 23.9c8 6 17.7 9.2 27.7 9.2h15.4c-15.4 0-46.2-30.8-46.2-69.3v-92.4c0-7.8 7.7-23.2 23.1-23.2z"/><path class="st6" d="M113 460.9l-49.9-44.8c-4.3 5.4-6.6 12.2-6.6 19.1v60.3c0 8.5 6.9 15.4 15.4 15.4h53.9v-21.3c0-11-4.7-21.4-12.8-28.7zM400.5 460.9l49.9-44.8c4.3 5.4 6.6 12.2 6.6 19.1v60.3c0 8.5-6.9 15.4-15.4 15.4h-53.9v-21.3c0-11 4.6-21.4 12.8-28.7z"/><path fill="#5b5d6e" d="M276 510.9h-38.5l4.8-69.3h28.9z"/><path d="M276 426.2h-38.5v14.5c0 4.8 3.9 8.6 8.6 8.6h21.3c4.8 0 8.6-3.9 8.6-8.6v-14.5z" fill="#515262"/><path class="st6" d="M186.3 362.8l70.4 63.4s-19.7 10-44 30c-4.2 3.5-10.4 2.9-13.9-1.3-.6-.7-1-1.4-1.4-2.2L164.3 380l10.5-15.7c2.3-3.5 7.1-4.5 10.7-2.2.2.2.5.5.8.7zM327.1 362.8l-70.4 63.4s19.7 10 44 30c4.2 3.5 10.4 2.9 13.9-1.3.6-.7 1-1.4 1.4-2.2l33.1-72.7-10.5-15.7c-2.3-3.5-7.1-4.5-10.7-2.2-.2.2-.5.5-.8.7z"/><path d="M303.4 97.9l7.2 51c33 6.6 37.7 58.3 38.4 73.1.1 2.7 1 5.3 2.4 7.5L364 249s-4.3-32.2 15.4-53.9c.1 0 6.8-128-76-97.2z" fill="#785550"/><path class="st5" d="M371.8 245.7l-8.7 34.8c-1 4.1-4.7 7-9 7-4.7 0-8.6-3.5-9.2-8.1l-4.5-35.6c-1.1-8.8 5.2-16.7 14-17.8.6-.1 1.2-.1 1.9-.1 8.8 0 16 7.2 16 16-.1 1.3-.2 2.6-.5 3.8z"/><path d="M164 84.1l11.4 7.8c-51.5 38-41.9 103.3-41.9 103.3 15.4 15.4 15.4 53.9 15.4 53.9l15.4-15.4s-5.9-44.5 23.1-61.6c27-15.9 50.6-7.7 74.6-7.7 64.5 0 82.6-24.3 79.4-53.9-1.6-15.3-25-47.2-84.7-46.2-24.1.3-69.3 7.6-92.7 19.8z" fill="#694b4b"/><path d="M159.5 157.6s-8.2-32.2 15.9-65.7c-51.5 38-41.9 103.3-41.9 103.3 15.4 15.4 15.4 53.9 15.4 53.9l15.4-15.4s-5.9-44.5 23.1-61.6c27-15.9 50.6-7.7 74.6-7.7 9.3 0 18.6-.6 27.8-1.9-49.7 1.6-79-36.1-130.3-4.9z" fill="#5a4146"/><path class="st2" d="M141.7 245.7l8.7 34.8c1 4.1 4.7 7 9 7 4.7 0 8.6-3.5 9.2-8.1l4.4-35.6c1.1-8.8-5.2-16.7-14-17.8-.6-.1-1.2-.1-1.9-.1-8.8 0-16 7.2-16 16 .1 1.3.3 2.6.6 3.8z"/><path class="st6" d="M356.9 495.5H303c-4.3 0-7.7 3.4-7.7 7.7v7.7h69.3v-7.7c0-4.2-3.5-7.7-7.7-7.7z"/></g></g></svg>'; // eslint-disable-line

export {
  iconPlus,
  iconLeft,
  iconRight,
  iconExit,
  iconAttach,
  iconClose,
  iconSearch,
  defaultAvatar,
  link,
  youtube,
  linkedin,
  twitter,
  facebook,
  github
};
