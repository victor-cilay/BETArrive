<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_b0be0f5e3c607565973856842aa3a79a($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('E49C7E5A2E049CFDAAQAAAAXAAAABNAAAACABAAAAAAAAAD/hawWpJVs/ppLxJM+p9G27XhamuYAydgQeyQmoRwA3zvMSSho6lnuzuYdpzxyf0OPOPfL/yKZsjNnZZ2V41rQberY67GV5g2x4iW1JNGJeXHHYSeKp5G0gDe1rXNohde425oUZu3Dgu0eyNylBUOIqw/Ur/JBtTHVOjmDs/5hAmKeaRi53Sxec3pa3dFVvAxhbTazrS5z0TdynI/7kH/tx9vZTFJU3dSLiGSra/d3l7Xu+SR99IU5XishRDa5M5KCBYNfxhH3HkBLCVb9qWROogcAAACwAQAAhrMlrthTs26IF5BnQIHIiZXQ03E61JXXwY9jeK283nm2gGsYUYTHYD43gFmOSSQhweCLPvW1YuHWazdMvITE9OV06RWxNKUGegg8grzgm64eGoAtoo8jnGTfwCPtkoJxEbnApoYzKDqEVpdRAxAJs0WUpnRsta3NIgCD5I8PcfQpGDdmHxTyDmeeboqb8mBSAKSIAS1yD4GquBXhRtrUlp8NU8Gt9nSqls/1dV9mzTzg10Js//SqG1hIACZgj7FE2jqBBxuM7UAOAoPSRsfnwvY31A0i2YQb1y8/UzwBlaCSiEgUc0jPWRSdnkD1tr1ynFxWE/EeKYMzNRsliRnit7cedp594UnSAYPDhL3iO0WqQgVu0TDkCGrLIhC/2Jhfmn+MotbWl9/x0kPWcwOr1BYWCtOpd6o+aPYaJyNEkwL0mGszkRQwmkDwbOdKWJLNPdN5ZtC7M3TYghvhcdlZTDciODCU3uco85lysCRXS9hCzwPYbqZqt3ElVOWNCOI89mmL7Ywhly3ERJyIxJjXhXab/0JLPB2y6WyQjTdRjvpTfaQhv3GaAyCGBem0JttwRwAAALABAAAszSjlQlVz9pZGkSZTSDkuX9UEX+wDBttz43efFUrQTbCrUl8HxmlkcPx+rNNNCG+JiCAKdmwPOUDft9tCnolWMrRVZELvLGIulpYr2FbJZ4pkV1/JldtltjHOiTVhyFFPNxC+4Ugk9a2eyHbVvD1HFCvA2Gx2FX7v/csRxGcSZmjwgsUfg7SxDapu9o4TmOl8IGv1YgYYUUikW3JsmqXFC9qFW2S7Jpowo2j09JCYPUc9Nik73c2FRDaoSf63EQ84JPa80K65fi9UcJTZM7McrmF5VpV0Mmj7N9ScYYD4OFzeWUagDWt5QCwWVVy0oAS6XM/Nq8cr3zvgWsQNQnS+qFUuXs3Keic5sB9uz+KUu9+8tHZXmJSQq+1KAT+TDEoC4uUCzeXmKhyq3exZdnNGqOjiO1nf0RHHBMMyZD7IUj63mbfgjDuIMw7jiEmJNXqqPcotHH+M6bmkKBYyouk/mt0Za+mj8EIEACAS4mihFjqEcXrA/Nf1AIS1wum4ThwRznDW+3w/8CaKOVspE3+r3dy7ALefVwLqiqh+KzaZ/zHD9rnMsOjbFWUXU1yh1wNIAAAAsAEAANXknHkld8pMGweRsCvoMkic20aL8plzxbfPdGWcr31yjS7mSlyNjfMOyJCvSIXJB7iPRmEdrPTPwujjgkDDVSdmhOZ3vw3JGk5Sb2Ya4Mk+z4pFg2s1bYMbhZ5rnLFLjpb/rhO75GVPz4TNibQrr5oP0n6tkMxXjaELX5Pd6CKlsWbRwNn3+j4ES/4LSkaOMyPqL/gm25OVvMexc316GHNbdwWozhx2mr3HNcDacEQyVMBwKYo4VDlJBMT/jru731h5bx4v10SO2s3f9QbNRjV6f7BWol7SIw+yGJJATNzFa08Cm25Nu2Ss3qXxj3VBZXcvo4+c1uXpJy1QcZk2RvjR8OibfrYIdsPp6GNShyAl35OpX1qF67mWbLBleuZVoDSOJDe8AUloJ4C0PaBLmszn1Hl3iBjTWcd3VeM1z3s+FYJNO1ZBzlZZ2zRkjqrenfK9cfdniDzxJaSXOnOpAMuAsL/NTs1t7pFGcHc7nctkhRxQnILM8nL/t+AU1bo3fSBZ+WrSlkU8zmAr9VTzt/fqtvccvOTzYSHvJmA8OC3YdHBrvXHMWUM3ltISS1awLUkAAACYAQAAQBi1EAxT2nlStqbTK9nQvA+drMmGypNtojp/K1HCwaW/ruEZ9lF0pxOcXFpOxgmAUDnVmnwKn3NfJT6Bfb9iZ5ZQXdfTq08veoCFlO9zvePVLBD9hVXNYUyza3JZ2ml8C5KkF04KQKz1myV9NL+S5bWR28wOpx7llFzaeYiN726OpXiAXhH1cf8JMIyda8XTNZVGNBN/xauwqLRVlJlgItwtz3pMlBL7IF2+Pi0fwogA60/fF5Xn1pT7eUVroJlfA8BVfvMaYAeO5JoP5EiEzhhSi22cdNJFWfvkPm/yxQn/bRjB1BraDz45KlLP+iiV6uqWj2rYbLXVV8hZuEmTnSBo11a6uOmicczs0aeyVAfITycibh1BPKbXBPn0Wv4WkN9+VDeASW1FAb8395yKQoi8VMpXjEjQ2wR4z5N7xf3qqM8KWv/pAzPNqY1xBGNS6iGpktB7dsuspVS3xUoFJvqz8wPusLMxCDZ8RQCCb1NTws+ovLNl8RE0QBYMV6kmdNm6EmRRp163gBBurac7yWxq5yr7oFcNSgAAAKABAADGzddoWHj91CHCi8g84Py9w5gAY380TaMh2SnBlT0SJnZ0cT/ZmJLm3XYwOp7q0uxTpk35CcTGc7yAcxzwe/Dvq34RA4ug9KaPJsCtOKsoR3EmLp/10oJo35hNNZQd8H0XLQ52p7NOj6W9JVY9Yv0msd+H8+Suhszkzoqp7AWv3K0TV4tFCIzzMxfEms8ugmBlH19Kjt1vX2/S8DNB3xoqw3bwBHSgQ6IxIjLPko1pBloY8TboOpJ8iCiuVSa7J7R3r4PoA+rcqk0vGXcgFHIuW7X1PpnrOrokIHuSuf2K5RsnvDFlHHK48QjeWvaAjQs4ay7i24/BwcSw6C07yYV7emGWIJaZxbHIbg/waGdF4TPulSfbdeFVgdvlrOSQWHClDrvVXIQyZm1/yyzFXpDyP/chYaSXv2aMxDKHausjxeN94p+NZwY7xmTwdGDGXtL0dJuBH8wSCpqP32aMXpXJhC47x1A5lt443n2/eL20sdft5H8bLIPIfkdlP08STkhmndF6ByKel1wCCGQB7GE2eLAchOuih7yQmG3y/0b8zwAAAAA=');
