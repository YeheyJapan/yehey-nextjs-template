import {
  Facebook,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  facebook: Facebook,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      version="1.1"
      {...props}
    >
      <path
        d="M 211 69.100 C 190.891 71.475, 171.651 76.815, 155 84.642 C 145.140 89.277, 130.994 97.637, 131.008 98.821 C 131.032 100.794, 141.546 139.811, 146.011 154.500 C 165.162 217.493, 192.561 273.505, 225.499 316.998 L 232.832 326.682 225.132 343.091 C 214.657 365.416, 202.555 388.534, 188.586 412.907 C 182.153 424.131, 177.252 433.583, 177.695 433.912 C 191.737 444.345, 216.847 456.216, 240.406 463.558 L 249.312 466.333 251.132 464.085 C 252.134 462.848, 257.423 454.336, 262.886 445.168 C 310.725 364.897, 345.734 283.084, 378.474 175.050 C 384.351 155.656, 398 106.721, 398 105.042 C 398 103.553, 387.685 97.237, 376.500 91.878 C 358.954 83.471, 330.548 75.149, 310.435 72.524 L 305.370 71.863 303.076 85.182 C 300.592 99.603, 292.453 140.669, 289.041 156 C 283.163 182.405, 269.202 231.657, 267.979 230.300 C 267.582 229.860, 264.678 223.258, 261.526 215.629 C 250.689 189.407, 240.727 155.710, 234.584 124.500 C 232.057 111.662, 226.361 77.320, 225.793 71.500 C 225.532 68.826, 225.119 68.484, 222 68.357 C 220.075 68.279, 215.125 68.613, 211 69.100"
        stroke="none"
        fillRule="evenodd"
        className="fill-white dark:fill-black"
      />
      <path
        d="M 227.500 29.507 C 175.911 36.808, 133.622 57.227, 97.131 92.455 C 60.457 127.858, 37.266 173.297, 29.508 224.947 C 27.497 238.336, 27.513 270.180, 29.538 285.630 C 38.206 351.752, 74.801 410.488, 130.090 447.019 C 166.856 471.312, 205.376 483.505, 249.238 484.736 C 290.075 485.882, 323.660 478.415, 359.485 460.225 C 429.692 424.579, 476.442 355.820, 484.062 277 C 485.465 262.479, 484.771 238.444, 482.516 223.500 C 469.960 140.275, 413.283 70.544, 334.645 41.570 C 322.614 37.137, 309.562 33.691, 294.145 30.876 C 278.971 28.106, 242.669 27.360, 227.500 29.507 M 211 69.100 C 190.891 71.475, 171.651 76.815, 155 84.642 C 145.140 89.277, 130.994 97.637, 131.008 98.821 C 131.032 100.794, 141.546 139.811, 146.011 154.500 C 165.162 217.493, 192.561 273.505, 225.499 316.998 L 232.832 326.682 225.132 343.091 C 214.657 365.416, 202.555 388.534, 188.586 412.907 C 182.153 424.131, 177.252 433.583, 177.695 433.912 C 191.737 444.345, 216.847 456.216, 240.406 463.558 L 249.312 466.333 251.132 464.085 C 252.134 462.848, 257.423 454.336, 262.886 445.168 C 310.725 364.897, 345.734 283.084, 378.474 175.050 C 384.351 155.656, 398 106.721, 398 105.042 C 398 103.553, 387.685 97.237, 376.500 91.878 C 358.954 83.471, 330.548 75.149, 310.435 72.524 L 305.370 71.863 303.076 85.182 C 300.592 99.603, 292.453 140.669, 289.041 156 C 283.163 182.405, 269.202 231.657, 267.979 230.300 C 267.582 229.860, 264.678 223.258, 261.526 215.629 C 250.689 189.407, 240.727 155.710, 234.584 124.500 C 232.057 111.662, 226.361 77.320, 225.793 71.500 C 225.532 68.826, 225.119 68.484, 222 68.357 C 220.075 68.279, 215.125 68.613, 211 69.100"
        stroke="none"
        className="fill-black dark:fill-white"
        fillRule="evenodd"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}
