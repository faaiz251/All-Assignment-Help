import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-[#2BAFFC66] h-[820px] bg-cover md:px-10 flex flex-col md:flex-row items-center gap-[100px] mt-[50px] mb-[50px]">
      <div>
        <Image
          src="/static/images/woman.svg"
          alt="Student holding books"
          width={600}
          height={854}
          className="mb-[42px] drop-shadow-lg hover:drop-shadow-2xl transition-all ease-in"
        />
      </div>
      <svg width="57" height="132" className="mr-[-95px] mt-[330px] " viewBox="0 0 57 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.2994 129.869C56.3719 130.135 56.2146 130.41 55.9482 130.482L51.606 131.664C51.3395 131.736 51.0648 131.579 50.9923 131.313C50.9198 131.046 51.077 130.771 51.3435 130.699L55.2032 129.649L54.1531 125.789C54.0806 125.523 54.2378 125.248 54.5043 125.175C54.7707 125.103 55.0455 125.26 55.118 125.527L56.2994 129.869ZM1.01449 67.4912L0.514743 67.5071L1.01449 67.4912ZM55.8169 1C56.0744 1.4286 56.0744 1.4286 56.0744 1.42859C56.0744 1.42859 56.0744 1.42859 56.0744 1.42859C56.0744 1.42859 56.0744 1.42859 56.0744 1.4286C56.0744 1.42861 56.0743 1.42863 56.0743 1.42866C56.0742 1.42873 56.074 1.42883 56.0737 1.42898C56.0732 1.42928 56.0725 1.42975 56.0714 1.4304C56.0693 1.43168 56.066 1.43364 56.0616 1.43629C56.0529 1.44157 56.0396 1.44958 56.022 1.46028C55.9867 1.48167 55.9338 1.51383 55.864 1.55656C55.7244 1.64201 55.5171 1.76972 55.2474 1.93806L54.7179 1.08977C54.9901 0.919821 55.1999 0.790569 55.342 0.703637C55.413 0.66017 55.4671 0.627282 55.5035 0.605176C55.5218 0.594123 55.5356 0.585765 55.5449 0.580127C55.5496 0.577308 55.5531 0.57517 55.5556 0.573714C55.5568 0.572986 55.5577 0.57243 55.5583 0.572044C55.5587 0.571851 55.5589 0.571701 55.5591 0.571594C55.5592 0.57154 55.5592 0.571497 55.5593 0.571465C55.5593 0.571449 55.5593 0.571436 55.5594 0.571425C55.5594 0.57142 55.5594 0.571414 55.5594 0.571411C55.5594 0.571406 55.5594 0.571401 55.8169 1ZM53.5245 3.03307C53.0263 3.35462 52.4631 3.72215 51.8418 4.13351L51.2898 3.2997C51.9144 2.88613 52.4809 2.51648 52.9821 2.19291L53.5245 3.03307ZM50.1572 5.26182C49.6269 5.62103 49.0678 6.00344 48.4828 6.40816L47.9138 5.5858C48.5016 5.17914 49.0634 4.79487 49.5964 4.43386L50.1572 5.26182ZM46.8169 7.57275C46.2797 7.95211 45.7257 8.34712 45.1565 8.75722L44.5719 7.94592C45.1437 7.53391 45.7003 7.13706 46.24 6.75591L46.8169 7.57275ZM43.5207 9.94775C42.9909 10.3372 42.4504 10.7382 41.9007 11.1503L41.3008 10.3502C41.8532 9.93613 42.3961 9.53327 42.9285 9.142L43.5207 9.94775ZM40.2804 12.3772C39.7501 12.7828 39.2126 13.1979 38.6691 13.6221L38.0539 12.8338C38.6 12.4075 39.14 11.9904 39.6729 11.5829L40.2804 12.3772ZM37.0868 14.8698C36.5633 15.2868 36.0353 15.7117 35.5037 16.1441L34.8726 15.3684C35.4069 14.9337 35.9376 14.5067 36.4637 14.0876L37.0868 14.8698ZM33.9375 17.432C33.4238 17.859 32.9075 18.2927 32.3895 18.7329L31.7419 17.9709C32.2628 17.5283 32.7818 17.0922 33.2983 16.663L33.9375 17.432ZM30.8459 20.0595C30.3415 20.4981 29.8361 20.9425 29.3304 21.3926L28.6656 20.6456C29.1742 20.1929 29.6825 19.7459 30.1898 19.3048L30.8459 20.0595ZM27.8232 22.7506C27.3267 23.2034 26.8307 23.6615 26.3357 24.1246L25.6525 23.3944C26.1506 22.9284 26.6497 22.4674 27.1493 22.0118L27.8232 22.7506ZM24.8664 25.5177C24.3805 25.9846 23.8963 26.4562 23.4144 26.9323L22.7116 26.221C23.1968 25.7415 23.6844 25.2667 24.1736 24.7966L24.8664 25.5177ZM21.986 28.3643C21.5132 28.8453 21.0433 29.3306 20.577 29.8198L19.8531 29.1299C20.3231 28.6368 20.7965 28.1479 21.2728 27.6633L21.986 28.3643ZM19.1933 31.2954C18.7358 31.7913 18.2824 32.291 17.8338 32.7944L17.0873 32.1291C17.5398 31.6213 17.997 31.1173 18.4582 30.6173L19.1933 31.2954ZM16.5019 34.3165C16.0619 34.8288 15.6273 35.3446 15.1987 35.8637L14.4276 35.227C14.8604 34.7028 15.2992 34.182 15.7433 33.6649L16.5019 34.3165ZM13.9288 37.4342C13.509 37.9645 13.0961 38.498 12.6905 39.0343L11.8929 38.4313C12.303 37.8888 12.7205 37.3495 13.1447 36.8136L13.9288 37.4342ZM11.4941 40.6559C11.0985 41.2057 10.7111 41.7583 10.3328 42.3135L9.5064 41.7504C9.88972 41.1879 10.2819 40.6283 10.6824 40.0718L11.4941 40.6559ZM9.22015 43.9944C8.85491 44.5632 8.4996 45.1344 8.15488 45.7079L7.29782 45.1926C7.64778 44.6105 8.00832 44.0309 8.3787 43.4541L9.22015 43.9944ZM7.14294 47.453C6.81464 48.041 6.49805 48.6309 6.19389 49.2227L5.30449 48.7656C5.61408 48.1632 5.93612 47.5631 6.26984 46.9655L7.14294 47.453ZM5.30436 51.0355C5.01921 51.6459 4.7479 52.2578 4.4912 52.8712L3.56873 52.4851C3.83085 51.8588 4.10767 51.2344 4.39837 50.6123L5.30436 51.0355ZM3.75601 54.7415C3.52347 55.3745 3.30718 56.0086 3.10797 56.6436L2.15381 56.3443C2.35799 55.6935 2.57947 55.0441 2.81735 54.3966L3.75601 54.7415ZM2.55847 58.5664C2.39066 59.218 2.24161 59.8702 2.11217 60.5228L1.13128 60.3283C1.26448 59.6567 1.41774 58.9862 1.59007 58.317L2.55847 58.5664ZM1.78169 62.4956C1.6915 63.1573 1.62233 63.8191 1.5751 64.4807L0.577639 64.4095C0.626435 63.7259 0.697847 63.0428 0.790855 62.3605L1.78169 62.4956ZM1.50006 66.4776C1.49897 66.8102 1.50365 67.1428 1.51424 67.4753L0.514743 67.5071C0.503782 67.1628 0.498933 66.8185 0.500067 66.4743L1.50006 66.4776ZM1.51424 67.4753C1.52488 67.8097 1.54151 68.1442 1.56398 68.4785L0.566226 68.5456C0.542977 68.1996 0.52577 67.8535 0.514743 67.5071L1.51424 67.4753ZM1.76789 70.4829C1.8578 71.1449 1.96972 71.8063 2.10269 72.467L1.12235 72.6643C0.985319 71.9835 0.869835 71.3011 0.776984 70.6175L1.76789 70.4829ZM2.55949 74.4302C2.73051 75.0787 2.921 75.7261 3.13004 76.3723L2.17858 76.6801C1.9641 76.0171 1.76841 75.352 1.59255 74.6852L2.55949 74.4302ZM3.79988 78.2753C4.0379 78.9013 4.29259 79.5258 4.5631 80.1486L3.6459 80.547C3.36943 79.9106 3.10888 79.2717 2.86516 78.6307L3.79988 78.2753ZM5.41326 81.9949C5.70593 82.5967 6.01274 83.1966 6.33288 83.7944L5.45135 84.2665C5.12528 83.6577 4.81253 83.0462 4.51396 82.4322L5.41326 81.9949ZM7.32404 85.5663C7.66345 86.1486 8.01491 86.7285 8.37767 87.3058L7.53096 87.8378C7.16251 87.2515 6.8053 86.6621 6.46011 86.07L7.32404 85.5663ZM9.48312 89.006C9.85996 89.5669 10.2469 90.1251 10.6433 90.6804L9.82938 91.2614C9.42771 90.6987 9.03535 90.1327 8.65305 89.5636L9.48312 89.006ZM11.8457 92.3185C12.2527 92.8582 12.6681 93.3949 13.0912 93.9284L12.3077 94.5498C11.8798 94.0102 11.4594 93.467 11.0473 92.9206L11.8457 92.3185ZM14.376 95.5106C14.8084 96.0312 15.2477 96.5483 15.6931 97.0619L14.9376 97.7171C14.4877 97.1983 14.0439 96.6758 13.6068 96.1496L14.376 95.5106ZM17.0446 98.589C17.4992 99.0926 17.9592 99.5925 18.4239 100.088L17.6943 100.772C17.2254 100.272 16.7612 99.7674 16.3023 99.2591L17.0446 98.589ZM19.8317 101.564C20.3052 102.052 20.7827 102.536 21.2637 103.015L20.5577 103.723C20.073 103.24 19.5915 102.753 19.1141 102.261L19.8317 101.564ZM22.7209 104.445C23.2104 104.918 23.7027 105.386 24.1971 105.85L23.5131 106.579C23.0152 106.112 22.5193 105.64 22.0261 105.164L22.7209 104.445ZM25.6977 107.237C26.2023 107.697 26.7084 108.151 27.2153 108.601L26.5517 109.349C26.0416 108.897 25.5321 108.439 25.024 107.976L25.6977 107.237ZM28.7494 109.944C29.2685 110.393 29.7875 110.836 30.3058 111.273L29.6613 112.037C29.1399 111.598 28.6177 111.152 28.0955 110.701L28.7494 109.944ZM31.87 112.575C32.4012 113.012 32.9308 113.443 33.458 113.867L32.8315 114.646C32.3014 114.22 31.7688 113.787 31.2346 113.347L31.87 112.575ZM35.0586 115.139C35.5966 115.562 36.1312 115.977 36.6615 116.385L36.052 117.178C35.519 116.768 34.9816 116.35 34.4407 115.925L35.0586 115.139ZM38.2969 117.628C38.8501 118.045 39.3973 118.452 39.9375 118.849L39.3445 119.655C38.8016 119.255 38.2517 118.846 37.6957 118.428L38.2969 117.628ZM41.5796 120.046C42.1447 120.454 42.7004 120.85 43.2452 121.235L42.6683 122.052C42.1208 121.665 41.5625 121.267 40.9946 120.857L41.5796 120.046ZM44.9272 122.411C45.5055 122.811 46.0688 123.196 46.615 123.566L46.0542 124.394C45.5053 124.022 44.9394 123.635 44.3583 123.233L44.9272 122.411ZM48.3111 124.703C48.9078 125.099 49.4782 125.472 50.0195 125.823L49.4754 126.662C48.9313 126.31 48.3581 125.934 47.7585 125.537L48.3111 124.703ZM51.743 126.928C52.3809 127.332 52.959 127.693 53.4699 128.008L52.945 128.859C52.4309 128.542 51.8494 128.179 51.208 127.773L51.743 126.928ZM55.2223 129.071C55.4971 129.235 55.7084 129.359 55.8508 129.442C55.9219 129.483 55.9758 129.514 56.0118 129.535C56.0298 129.546 56.0433 129.553 56.0522 129.559C56.0567 129.561 56.06 129.563 56.0622 129.564C56.0633 129.565 56.0641 129.565 56.0646 129.566C56.0648 129.566 56.065 129.566 56.0651 129.566C56.0652 129.566 56.0652 129.566 56.0652 129.566C56.0652 129.566 56.0652 129.566 56.0652 129.566C56.0652 129.566 56.0652 129.566 56.0652 129.566C56.0652 129.566 56.0652 129.566 55.8169 130C55.5686 130.434 55.5686 130.434 55.5685 130.434C55.5685 130.434 55.5685 130.434 55.5685 130.434C55.5685 130.434 55.5685 130.434 55.5684 130.434C55.5684 130.434 55.5683 130.434 55.5682 130.434C55.568 130.434 55.5678 130.434 55.5675 130.433C55.5668 130.433 55.5659 130.432 55.5646 130.432C55.5622 130.43 55.5585 130.428 55.5538 130.425C55.5443 130.42 55.5301 130.412 55.5116 130.401C55.4744 130.38 55.4192 130.348 55.3468 130.305C55.202 130.221 54.9881 130.095 54.7106 129.93L55.2223 129.071Z" fill="black"/>
</svg>

      <div className="mb-[80px] leading-[50px] mr-[-200px]">
        <h2 className="text-[48px] leading-[56px] font-bold font-poppins text-[#1C1C1C] mb-[30px]">
          How it Works?
        </h2>
        <p className="text-[18px] text-[#1C1C1C] leading-[30px] font-[400] font-poppins w-[577px]">
          A seamless process to deliver top-quality work, from start to finish.
        </p>

        <div className="flex items-start bg-white w-[565px] h-[161px] rounded-lg mt-[20px] p-5">
          <div className="text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            01
          </div>

          <div className="mt-[10px]">
            <h3 className="text-[22px] font-bold font-poppins leading-[28px] mb-[20px] ml-[45px] text-[#010101]">
              Share Your Requirements
            </h3>
            <Link
              href="/order"
              className="bg-[#55C360]  text-white text-[16px] px-4  py-4 mt-[10px] ml-[-40px] rounded-[40px] font-poppins hover:bg-green-600 font-semibold"
            >
              Talk to Expert
            </Link>
          </div>
        </div>

        <div className="flex items-center mb-[40px] bg-white w-[565px] h-[74px] rounded-lg mt-[30px] p-5">
          <div className=" flex items-center justify-center  text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            02
          </div>
          <div className="ml-4">
            <h3 className="text-[22px] font-bold font-poppins leading-[24px] ml-[30px] text-[#010101]">
              Pay for Services
            </h3>
          </div>
        </div>

        <div className="flex items-center mb-[40px] bg-white w-[565px] h-[74px] rounded-lg p-5">
          <div className="flex items-center justify-center text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            03
          </div>
          <div className="ml-4">
            <h3 className="text-[22px] font-bold font-poppins leading-[24px] ml-[30px] text-[#010101]">
              Get it done on time
            </h3>
          </div>
        </div>

        <div className="flex items-center bg-white w-[565px] h-[74px] rounded-lg p-5 ">
          <div className="flex items-center justify-center text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            04
          </div>
          <div className="ml-4">
            <h3 className="text-[22px] font-bold font-poppins leading-[24px] ml-[30px] text-[#010101]">
              Make it perfect
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
      <svg width="57" height="169" className="ml-[90px] mt-[-50px]" viewBox="0 0 57 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.505785 166.924C0.463901 167.197 0.651214 167.452 0.924161 167.494L5.3721 168.177C5.64504 168.219 5.90027 168.031 5.94215 167.758C5.98404 167.485 5.79672 167.23 5.52377 167.188L1.57005 166.582L2.17676 162.628C2.21865 162.355 2.03133 162.1 1.75839 162.058C1.48544 162.016 1.23022 162.203 1.18833 162.476L0.505785 166.924ZM55.9854 86.5623L56.4852 86.5747L55.9854 86.5623ZM1 1C0.694823 1.39606 0.694818 1.39606 0.694813 1.39606C0.694813 1.39606 0.69481 1.39605 0.694809 1.39605C0.694809 1.39605 0.694813 1.39606 0.69482 1.39606C0.694836 1.39607 0.694868 1.3961 0.694916 1.39614C0.695012 1.39621 0.695174 1.39633 0.6954 1.39651C0.695854 1.39686 0.696568 1.39741 0.697542 1.39816C0.699489 1.39967 0.702475 1.40197 0.70649 1.40508C0.714519 1.41129 0.726665 1.42071 0.742854 1.43329C0.775232 1.45846 0.823781 1.49631 0.887917 1.54661C1.01619 1.64722 1.20681 1.79765 1.45509 1.99607L2.0794 1.21489C1.82867 1.01452 1.63567 0.8622 1.50507 0.759769C1.43977 0.708553 1.39007 0.669807 1.35656 0.643759C1.33981 0.630735 1.3271 0.620886 1.31851 0.614239C1.31422 0.610916 1.31095 0.608393 1.30873 0.606675C1.30761 0.605815 1.30676 0.605157 1.30617 0.604701C1.30587 0.604472 1.30564 0.604294 1.30548 0.604167C1.30539 0.604103 1.30533 0.604052 1.30528 0.604013C1.30525 0.603994 1.30523 0.603978 1.30522 0.603965C1.30521 0.603959 1.3052 0.603951 1.30519 0.603948C1.30518 0.603941 1.30518 0.603936 1 1ZM3.0309 3.27698C3.48482 3.6514 3.99817 4.07914 4.56494 4.55786L5.21021 3.7939C4.64037 3.3126 4.12404 2.88237 3.66722 2.50555L3.0309 3.27698ZM6.09477 5.86389C6.57762 6.2804 7.08702 6.72379 7.62052 7.19312L8.28103 6.4423C7.74502 5.97077 7.23318 5.52524 6.74794 5.10668L6.09477 5.86389ZM9.11709 8.52206C9.59654 8.95176 10.0912 9.39889 10.5997 9.86292L11.2738 9.12426C10.763 8.65816 10.2661 8.20902 9.7845 7.77737L9.11709 8.52206ZM12.0835 11.2292C12.5677 11.679 13.0621 12.1423 13.5658 12.6187L14.253 11.8922C13.7471 11.4137 13.2504 10.9484 12.7641 10.4965L12.0835 11.2292ZM15.0061 13.993C15.4823 14.4513 15.9655 14.9204 16.4547 15.3997L17.1545 14.6854C16.6632 14.204 16.1779 13.7329 15.6996 13.2725L15.0061 13.993ZM17.887 16.8158C18.3537 17.2814 18.825 17.7557 19.3003 18.2384L20.0129 17.5369C19.5355 17.0519 19.0621 16.5755 18.5933 16.1079L17.887 16.8158ZM20.7161 19.6899C21.1736 20.1633 21.6341 20.6441 22.0969 21.132L22.8224 20.4438C22.3574 19.9536 21.8948 19.4706 21.4352 18.995L20.7161 19.6899ZM23.4836 22.6079C23.9338 23.0917 24.3857 23.582 24.8388 24.0785L25.5775 23.4045C25.1221 22.9055 24.668 22.4128 24.2157 21.9267L23.4836 22.6079ZM26.1933 25.5777C26.6355 26.0722 27.0784 26.5724 27.5216 27.0782L28.2737 26.4192C27.8283 25.9108 27.3831 25.4081 26.9386 24.9111L26.1933 25.5777ZM28.8432 28.6027C29.2761 29.1075 29.7088 29.6174 30.1407 30.1322L30.9068 29.4894C30.4725 28.9718 30.0375 28.4592 29.6023 27.9517L28.8432 28.6027ZM31.4281 31.6838C31.8504 32.1988 32.2717 32.7184 32.6915 33.2423L33.4719 32.6171C33.0497 32.0901 32.626 31.5675 32.2013 31.0497L31.4281 31.6838ZM33.9421 34.8225C34.3528 35.3478 34.7616 35.8773 35.1681 36.4107L35.9635 35.8046C35.5544 35.2678 35.1431 34.7351 34.7299 34.2066L33.9421 34.8225ZM36.3788 38.0204C36.7766 38.5564 37.1718 39.0961 37.564 39.6395L38.3748 39.0542C37.98 38.5072 37.5822 37.9639 37.1818 37.4245L36.3788 38.0204ZM38.7308 41.2796C39.1143 41.8267 39.4946 42.3772 39.8712 42.931L40.6981 42.3687C40.3188 41.8108 39.9358 41.2564 39.5496 40.7055L38.7308 41.2796ZM40.9895 44.602C41.3573 45.1607 41.7212 45.7225 42.0806 46.2873L42.9242 45.7504C42.562 45.1812 42.1953 44.615 41.8247 44.0521L40.9895 44.602ZM43.1452 47.9903C43.4956 48.561 43.8412 49.1346 44.1816 49.7108L45.0426 49.2021C44.6992 48.6209 44.3507 48.0426 43.9975 47.4671L43.1452 47.9903ZM45.1872 51.4473C45.5178 52.0302 45.8429 52.6155 46.162 53.2033L47.0408 52.7261C46.7187 52.1328 46.3906 51.542 46.057 50.9539L45.1872 51.4473ZM47.102 54.9748C47.4103 55.5699 47.7123 56.1672 48.0075 56.7666L48.9046 56.3247C48.6063 55.719 48.3012 55.1157 47.9899 54.5148L47.102 54.9748ZM48.8742 58.5741C49.1574 59.1813 49.4334 59.7905 49.7018 60.4015L50.6174 59.9993C50.3459 59.3813 50.0668 58.7653 49.7805 58.1514L48.8742 58.5741ZM50.4862 62.2454C50.7411 62.8647 50.9878 63.4857 51.2261 64.1082L52.16 63.7507C51.9187 63.1203 51.6689 62.4917 51.411 61.8649L50.4862 62.2454ZM51.9178 65.988C52.1407 66.6189 52.3545 67.2513 52.5589 67.8849L53.5106 67.5779C53.3033 66.9354 53.0866 66.2944 52.8608 65.655L51.9178 65.988ZM53.1462 69.7988C53.333 70.4408 53.5098 71.0838 53.6762 71.7277L54.6444 71.4775C54.4754 70.8236 54.2959 70.1708 54.1063 69.5194L53.1462 69.7988ZM54.146 73.6724C54.2924 74.324 54.4277 74.9763 54.5517 75.6293L55.5341 75.4428C55.4081 74.7787 55.2705 74.1154 55.1217 73.4532L54.146 73.6724ZM54.8901 77.5994C54.9914 78.2586 55.0807 78.9182 55.1574 79.5781L56.1507 79.4626C56.0725 78.7903 55.9816 78.1185 55.8785 77.4475L54.8901 77.5994ZM55.3504 81.5659C55.4019 82.2298 55.4405 82.8937 55.4655 83.5576L56.4648 83.52C56.4392 82.8426 56.4 82.1653 56.3474 81.4885L55.3504 81.5659ZM55.4997 85.5527C55.4985 85.8852 55.4938 86.2176 55.4855 86.5499L56.4852 86.5747C56.4936 86.2353 56.4984 85.8958 56.4997 85.5564L55.4997 85.5527ZM55.4855 86.5499C55.4773 86.8803 55.4656 87.2106 55.4505 87.5409L56.4494 87.5867C56.4649 87.2495 56.4768 86.9122 56.4852 86.5747L55.4855 86.5499ZM55.3186 89.5215C55.2613 90.1797 55.1907 90.8375 55.1072 91.4947L56.0993 91.6206C56.1843 90.9506 56.2563 90.2798 56.3148 89.6082L55.3186 89.5215ZM54.8194 93.461C54.7115 94.1127 54.5913 94.7636 54.4594 95.4137L55.4394 95.6126C55.5737 94.951 55.6961 94.2882 55.806 93.6243L54.8194 93.461ZM54.0297 97.3566C53.876 97.9991 53.7111 98.6406 53.5356 99.2809L54.5 99.5454C54.6784 98.8948 54.846 98.2427 55.0023 97.5892L54.0297 97.3566ZM52.9784 101.194C52.7837 101.825 52.5789 102.456 52.3645 103.084L53.3109 103.407C53.5285 102.769 53.7364 102.13 53.934 101.488L52.9784 101.194ZM51.6938 104.962C51.4627 105.582 51.2224 106.2 50.9735 106.817L51.9007 107.191C52.1529 106.567 52.3964 105.94 52.6308 105.312L51.6938 104.962ZM50.2024 108.657C49.9388 109.265 49.6671 109.87 49.3876 110.474L50.2951 110.894C50.5778 110.283 50.8529 109.67 51.1197 109.055L50.2024 108.657ZM48.5278 112.275C48.2353 112.871 47.9357 113.463 47.6292 114.054L48.5169 114.515C48.8266 113.918 49.1295 113.318 49.4253 112.716L48.5278 112.275ZM46.6909 115.817C46.3728 116.399 46.0483 116.98 45.7179 117.558L46.586 118.054C46.9196 117.471 47.2473 116.884 47.5687 116.296L46.6909 115.817ZM44.7099 119.282C44.3689 119.853 44.0223 120.421 43.6705 120.986L44.5196 121.514C44.8745 120.944 45.2242 120.371 45.5684 119.794L44.7099 119.282ZM42.6007 122.672C42.2391 123.232 41.8727 123.788 41.5019 124.341L42.3326 124.898C42.7063 124.34 43.0758 123.779 43.4405 123.215L42.6007 122.672ZM40.3768 125.991C39.9966 126.539 39.6124 127.084 39.2246 127.625L40.0376 128.208C40.4282 127.662 40.8154 127.113 41.1985 126.561L40.3768 125.991ZM38.0498 129.24C37.6528 129.777 37.2526 130.311 36.8495 130.841L37.6454 131.446C38.0513 130.913 38.4543 130.375 38.8542 129.834L38.0498 129.24ZM35.63 132.422C35.2176 132.949 34.8028 133.472 34.3859 133.991L35.1654 134.617C35.585 134.095 36.0025 133.568 36.4176 133.038L35.63 132.422ZM33.1259 135.539C32.6993 136.056 32.2711 136.569 31.8416 137.077L32.6054 137.723C33.0375 137.211 33.4683 136.695 33.8975 136.175L33.1259 135.539ZM30.5452 138.593C30.1053 139.102 29.6647 139.605 29.2236 140.103L29.9722 140.766C30.4158 140.265 30.859 139.759 31.3013 139.248L30.5452 138.593ZM27.8946 141.587C27.4421 142.087 26.9896 142.581 26.5377 143.07L27.2717 143.749C27.726 143.258 28.1809 142.761 28.6359 142.258L27.8946 141.587ZM25.1799 144.522C24.715 145.014 24.2513 145.5 23.7893 145.979L24.5091 146.673C24.9735 146.191 25.4396 145.703 25.9068 145.209L25.1799 144.522ZM22.3991 147.406C21.9247 147.888 21.4527 148.363 20.9836 148.831L21.6896 149.539C22.1609 149.069 22.6352 148.592 23.112 148.107L22.3991 147.406ZM19.5602 150.236C19.0783 150.708 18.6003 151.171 18.127 151.625L18.8194 152.346C19.295 151.89 19.7752 151.425 20.2593 150.951L19.5602 150.236ZM16.6686 153.011C16.1779 153.474 15.6932 153.926 15.2152 154.368L15.8942 155.102C16.3743 154.658 16.8613 154.204 17.3543 153.739L16.6686 153.011ZM13.7338 155.725C13.2263 156.186 12.7281 156.634 12.24 157.069L12.9054 157.815C13.3956 157.378 13.8962 156.928 14.4059 156.466L13.7338 155.725ZM10.7476 158.387C10.2316 158.838 9.72948 159.273 9.24283 159.691L9.89426 160.45C10.3832 160.03 10.8876 159.593 11.406 159.139L10.7476 158.387ZM7.70741 160.996C7.16839 161.45 6.65364 161.879 6.16565 162.282L6.80204 163.053C7.29253 162.648 7.80985 162.217 8.35149 161.761L7.70741 160.996ZM4.61617 163.546C4.04513 164.007 3.52768 164.419 3.06986 164.78L3.68864 165.565C4.14947 165.202 4.67004 164.788 5.24427 164.324L4.61617 163.546ZM1.47119 166.02C1.2207 166.211 1.02837 166.355 0.898949 166.452C0.834238 166.501 0.785255 166.537 0.752592 166.561C0.736261 166.573 0.72401 166.582 0.715914 166.588C0.711866 166.591 0.708856 166.593 0.706895 166.595C0.705914 166.596 0.705195 166.596 0.70474 166.596C0.704512 166.597 0.70435 166.597 0.704254 166.597C0.704205 166.597 0.704174 166.597 0.704159 166.597C0.704151 166.597 0.704148 166.597 0.704149 166.597C0.704149 166.597 0.704153 166.597 0.704153 166.597C0.704157 166.597 0.704163 166.597 1 167C1.29584 167.403 1.29584 167.403 1.29585 167.403C1.29586 167.403 1.29587 167.403 1.29588 167.403C1.29589 167.403 1.29591 167.403 1.29594 167.403C1.29599 167.403 1.29606 167.403 1.29614 167.403C1.29631 167.403 1.29654 167.403 1.29684 167.402C1.29744 167.402 1.29831 167.401 1.29943 167.4C1.30168 167.399 1.30498 167.396 1.30932 167.393C1.318 167.387 1.33084 167.377 1.34776 167.365C1.3816 167.34 1.43177 167.302 1.49769 167.253C1.62953 167.155 1.82435 167.008 2.07739 166.815L1.47119 166.02Z" fill="black"/>
</svg>

<svg width="57" height="116" className="ml-[90px] mt-[10px]" viewBox="0 0 57 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.525709 113.842C0.438301 114.104 0.57979 114.387 0.841734 114.474L5.11035 115.899C5.3723 115.986 5.6555 115.845 5.74291 115.583C5.83032 115.321 5.68883 115.038 5.42688 114.95L1.63256 113.684L2.89868 109.89C2.98609 109.628 2.8446 109.344 2.58266 109.257C2.32072 109.17 2.03751 109.311 1.9501 109.573L0.525709 113.842ZM55.9854 59.2442L56.485 59.2624L55.9854 59.2442ZM1 1C0.767752 1.44279 0.767747 1.44278 0.767743 1.44278C0.767743 1.44278 0.76774 1.44278 0.76774 1.44278C0.76774 1.44278 0.767745 1.44278 0.767754 1.44279C0.767773 1.4428 0.76781 1.44282 0.767865 1.44285C0.767974 1.4429 0.768156 1.443 0.768409 1.44313C0.768915 1.4434 0.769708 1.44381 0.770786 1.44438C0.772943 1.44552 0.776242 1.44725 0.780673 1.44959C0.789534 1.45425 0.802921 1.46132 0.820749 1.47076C0.856407 1.48963 0.90983 1.518 0.980342 1.55568C1.12137 1.63105 1.33075 1.74366 1.60308 1.8921L2.08167 1.01406C1.80684 0.86426 1.59503 0.750336 1.45166 0.673719C1.37997 0.635411 1.3254 0.606428 1.2886 0.586951C1.27021 0.577212 1.25626 0.56985 1.24683 0.564886C1.24212 0.562404 1.23855 0.560522 1.23611 0.559242C1.23489 0.558602 1.23396 0.558113 1.23332 0.557774C1.233 0.557605 1.23275 0.557474 1.23257 0.55738C1.23248 0.557333 1.23241 0.557296 1.23235 0.557268C1.23233 0.557254 1.2323 0.557242 1.23229 0.557233C1.23228 0.557228 1.23227 0.557223 1.23226 0.557221C1.23226 0.557216 1.23225 0.557212 1 1ZM3.3449 2.85879C3.84975 3.1434 4.42074 3.46881 5.05062 3.8331L5.55126 2.96744C4.91808 2.60124 4.3439 2.27402 3.83599 1.98768L3.3449 2.85879ZM6.75967 4.83307C7.29807 5.15166 7.86568 5.49088 8.45951 5.84992L8.9769 4.99417C8.38028 4.63344 7.80996 4.29261 7.26893 3.97246L6.75967 4.83307ZM10.1518 6.88383C10.6979 7.22088 11.261 7.57186 11.8394 7.93628L12.3725 7.09019C11.7914 6.7241 11.2256 6.3715 10.6771 6.0329L10.1518 6.88383ZM13.5127 9.00119C14.0524 9.34809 14.6027 9.70529 15.1625 10.0724L15.7109 9.23626C15.1485 8.86739 14.5956 8.50852 14.0535 8.16001L13.5127 9.00119ZM16.8134 11.1664C17.3566 11.5299 17.9069 11.902 18.4634 12.2823L19.0276 11.4567C18.4685 11.0745 17.9154 10.7007 17.3697 10.3354L16.8134 11.1664ZM20.0822 13.4002C20.6172 13.7736 21.1567 14.154 21.6997 14.5412L22.2803 13.727C21.7344 13.3378 21.1922 12.9554 20.6545 12.5802L20.0822 13.4002ZM23.3113 15.7031C23.8376 16.0868 24.3663 16.4766 24.8967 16.8721L25.4946 16.0705C24.9612 15.6727 24.4295 15.2809 23.9004 14.8951L23.3113 15.7031ZM26.4788 18.066C26.9996 18.4637 27.5213 18.8668 28.043 19.2751L28.6593 18.4876C28.1344 18.0768 27.6096 17.6713 27.0857 17.2712L26.4788 18.066ZM29.592 20.5027C30.1052 20.9147 30.6177 21.3315 31.1288 21.7529L31.7649 20.9813C31.2504 20.5571 30.7345 20.1375 30.218 19.7229L29.592 20.5027ZM32.6429 23.0187C33.1451 23.4444 33.6451 23.8745 34.1423 24.3086L34.8001 23.5554C34.2991 23.1179 33.7953 22.6847 33.2896 22.2559L32.6429 23.0187ZM35.6204 25.6192C36.11 26.0601 36.5961 26.505 37.078 26.9536L37.7593 26.2217C37.2733 25.7692 36.7831 25.3206 36.2896 24.8761L35.6204 25.6192ZM38.511 28.3108C38.9862 28.7689 39.4564 29.2305 39.9211 29.6955L40.6285 28.9887C40.1593 28.5191 39.6845 28.0531 39.205 27.5908L38.511 28.3108ZM41.3006 31.1039C41.7581 31.5804 42.209 32.0602 42.6528 32.5431L43.3891 31.8664C42.9403 31.3781 42.4844 30.893 42.0221 30.4114L41.3006 31.1039ZM43.9706 34.0106C44.4052 34.5063 44.8315 35.0048 45.249 35.506L46.0174 34.866C45.5943 34.3581 45.1624 33.8531 44.7225 33.3514L43.9706 34.0106ZM46.4919 37.0405C46.8995 37.5584 47.297 38.0789 47.6834 38.6018L48.4876 38.0073C48.0949 37.4761 47.6913 36.9476 47.2778 36.4221L46.4919 37.0405ZM48.8279 40.2041C49.2031 40.7486 49.5658 41.2953 49.915 41.844L50.7586 41.3071C50.4026 40.7477 50.0332 40.1908 49.6514 39.6367L48.8279 40.2041ZM50.932 43.5139C51.2648 44.0863 51.5822 44.6606 51.8833 45.2363L52.7694 44.7729C52.4612 44.1834 52.1365 43.5961 51.7965 43.0113L50.932 43.5139ZM52.7486 46.994C53.0234 47.5897 53.2798 48.1866 53.5168 48.7845L54.4464 48.416C54.2024 47.8004 53.9387 47.1867 53.6566 46.5752L52.7486 46.994ZM54.1831 50.6251C54.3872 51.2487 54.5691 51.873 54.7278 52.4977L55.697 52.2515C55.5326 51.6042 55.3443 50.9583 55.1335 50.3141L54.1831 50.6251ZM55.1371 54.3961C55.2504 55.0375 55.338 55.6789 55.3988 56.3202L56.3943 56.2259C56.331 55.5571 56.2397 54.889 56.1218 54.2221L55.1371 54.3961ZM55.4992 58.2573C55.5019 58.5803 55.4975 58.9032 55.4857 59.226L56.485 59.2624C56.4974 58.9246 56.502 58.5867 56.4992 58.249L55.4992 58.2573ZM55.4857 59.226C55.4738 59.5522 55.4544 59.8784 55.4278 60.2046L56.4244 60.2861C56.4523 59.9451 56.4726 59.6039 56.485 59.2624L55.4857 59.226ZM55.1823 62.1559C55.0735 62.7994 54.9375 63.4424 54.7756 64.0847L55.7453 64.329C55.9134 63.6621 56.0549 62.9932 56.1683 62.3227L55.1823 62.1559ZM54.225 65.975C54.0206 66.5944 53.7932 67.2128 53.544 67.8298L54.4713 68.2043C54.7282 67.568 54.9632 66.9293 55.1747 66.2884L54.225 65.975ZM52.7461 69.6478C52.4662 70.2387 52.1673 70.8281 51.8504 71.4155L52.7305 71.8903C53.0553 71.2882 53.3621 70.6833 53.6498 70.0759L52.7461 69.6478ZM50.8678 73.1373C50.5286 73.7011 50.1737 74.2628 49.8041 74.8221L50.6383 75.3735C51.0154 74.8028 51.3779 74.2292 51.7247 73.6528L50.8678 73.1373ZM48.6737 76.4626C48.2905 76.9969 47.8946 77.5288 47.4869 78.058L48.279 78.6684C48.6935 78.1305 49.0962 77.5894 49.4864 77.0453L48.6737 76.4626ZM46.2423 79.6213C45.8227 80.1319 45.3928 80.6397 44.9533 81.1444L45.7075 81.8011C46.153 81.2895 46.5891 80.7744 47.0149 80.2562L46.2423 79.6213ZM43.6234 82.6317C43.1743 83.1211 42.7169 83.6074 42.2519 84.0903L42.9722 84.784C43.4426 84.2955 43.9055 83.8034 44.3603 83.3078L43.6234 82.6317ZM40.8511 85.5128C40.3794 85.9814 39.9013 86.4465 39.4173 86.908L40.1075 87.6317C40.5962 87.1657 41.0792 86.6958 41.5559 86.2222L40.8511 85.5128ZM37.9553 88.2755C37.4646 88.7259 36.969 89.1725 36.4693 89.615L37.1323 90.3637C37.6363 89.9173 38.1363 89.4668 38.6315 89.0123L37.9553 88.2755ZM34.959 90.9301C34.4517 91.3644 33.9411 91.7946 33.4279 92.2204L34.0664 92.99C34.5835 92.561 35.0981 92.1275 35.6094 91.6896L34.959 90.9301ZM31.8759 93.4886C31.3552 93.9078 30.8327 94.3222 30.3092 94.7319L30.9254 95.5194C31.4525 95.107 31.9786 94.6897 32.5029 94.2676L31.8759 93.4886ZM28.7198 95.9584C28.1857 96.365 27.6514 96.7664 27.1175 97.1624L27.7132 97.9655C28.2503 97.5672 28.7881 97.1633 29.3255 96.7541L28.7198 95.9584ZM25.5036 98.3444C24.9565 98.7401 24.4109 99.1299 23.8675 99.5135L24.4442 100.33C24.9906 99.9446 25.5394 99.5526 26.0897 99.1546L25.5036 98.3444ZM22.2254 100.659C21.6704 101.042 21.1187 101.418 20.5715 101.787L21.1305 102.616C21.6806 102.245 22.2351 101.867 22.7931 101.482L22.2254 100.659ZM18.8963 102.904C18.3306 103.277 17.7708 103.641 17.2181 103.998L17.7602 104.838C18.3156 104.48 18.8781 104.113 19.4467 103.739L18.8963 102.904ZM15.5387 105.07C14.9579 105.437 14.3868 105.793 13.8268 106.139L14.3526 106.99C14.9152 106.642 15.489 106.284 16.0726 105.915L15.5387 105.07ZM12.1106 107.189C11.5209 107.546 10.9465 107.89 10.3893 108.22L10.899 109.08C11.4587 108.748 12.0358 108.403 12.6283 108.045L12.1106 107.189ZM8.66066 109.233C8.0529 109.585 7.47178 109.918 6.92039 110.23L7.41346 111.1C7.96757 110.786 8.5515 110.452 9.16215 110.098L8.66066 109.233ZM5.16556 111.213C4.51646 111.572 3.92819 111.893 3.40845 112.173L3.88266 113.053C4.40557 112.771 4.99715 112.449 5.64968 112.088L5.16556 111.213ZM1.63096 113.114C1.35249 113.259 1.13832 113.369 0.994052 113.443C0.921916 113.479 0.867256 113.507 0.830769 113.525C0.812526 113.535 0.798827 113.542 0.789759 113.546C0.785225 113.548 0.781849 113.55 0.779642 113.551C0.778538 113.552 0.777726 113.552 0.777208 113.552C0.776949 113.553 0.776764 113.553 0.776652 113.553C0.776596 113.553 0.776558 113.553 0.776539 113.553C0.776529 113.553 0.776524 113.553 0.776524 113.553C0.776524 113.553 0.776527 113.553 0.776527 113.553C0.776531 113.553 0.776537 113.553 1 114C1.22346 114.447 1.22347 114.447 1.22348 114.447C1.22348 114.447 1.22349 114.447 1.2235 114.447C1.22352 114.447 1.22354 114.447 1.22357 114.447C1.22363 114.447 1.2237 114.447 1.22379 114.447C1.22397 114.447 1.22423 114.447 1.22456 114.447C1.22522 114.446 1.22617 114.446 1.22742 114.445C1.22991 114.444 1.23357 114.442 1.23839 114.44C1.24803 114.435 1.26231 114.428 1.28114 114.418C1.31879 114.399 1.37463 114.371 1.44797 114.334C1.59464 114.259 1.8113 114.148 2.09233 114.002L1.63096 113.114Z" fill="black"/>
</svg>

        
      </div>
    </div>
  );
};

export default HowItWorks;
