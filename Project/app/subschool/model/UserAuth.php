<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_96f9761946b081b9daaa2750b49de18a($e,$m){

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
return sg_load('E49C7E5A2DD3AC2DAAQAAAAXAAAABNAAAACABAAAAAAAAAD/0vbFaKaS8n9cuvzaLHSEPlI3gjNCCWn1VY22s8BdYdIpI/i7MgXLRejjiNZw/IaMI9COLQxL6hq2skj1F1rFMsKKJTJyaYUPNajLTMncvbaG3+yqaU4/fHjVrU2G1AsELp9YnEE/0Lf1JqccHCyGAIlDC7EHLK3V/rfIIEHtoA1QsLoEaKe0BL46oygytYVcweq1Q4X3kwzAvNHJABsbEopsCOYwI+kbmt1e2F5eGr7ybZxkueFUGyCSE0ufFAF2EiZU6zdgOx1qqI40SWTO/gcAAACwAQAA8zIWXlvdqfHCwDhpi2pS8x97uC5dgQ1dEru9vK/PjWFj3KLCJ4s0lbrYS6Ziohqi8nBBLZYuDOJDk8x1ULAxIfhFBL/S1EkNCfuf0HtR8qH4pPRszE5Hi47hxWm8TjLgM0OVOMyaXZoKBdUbaXGWCZ/lFFp253UxZRCnmRJMRWvVHwjG7iRW0OYXbyAHem/jP2cfk9HCL7iBu+7u7GnYblHiadQciF8r45Ejo4xDiPCDRbrQxqHvM5mF1U8P7HTIBpVyIkYYtKT0MPxAN51JoTt0t4bPZDdbhlIdoKLmJFcwNQHfulwtvZ+bK2U/Rwx2906b2aROMPqBew+7lWv2SRm/klpIUtGy2TruViUR/2vudTHyZ7QGpnq7cgFkoqAmHUDRPA0YpmiJehKQcJOLYNRj27CkysciiuNriRdSSyX3Tm0bgqX+/gkScSptnNoa3VDEIC94K++n4q+05PGHHFsOI9AEc5P/Mtqil5riDoBB09zJhC1FHujnuroXHLpOgWok2K2oVMg9m139Tcak/241VgrwSAv2vpe5STLMh51XUVZqRdh00/6G+JMQaR7ERwAAALABAADEbY0849pQ7oolBB3jhNafGlo0B2yvTQvNJxlU7gPWxv/qYYFr1Ql0MUZIwllQzLD3eq4daFhE+O9uUCtSMeCaeerTztQm2FR3szJbj7oCy7rg6yprrzc6LQc154i8rVbrE3KjrzM6MFYm6HkIPjjwBoqIuEjrhdhL6hSwcqelWGvJGcSwnw5oB/hOxzywwjqDu1ycIob6lJ2ukJ7F8gPfc6gqdtvfyQLaz2QWLETdvLedDq6c5AAhDQt+dV3UYq+F2rsmGNHjy9SZQ5bU6IDuTh0EzJgdRJZqIRz3dcDQNJhFbyN/OiDIe9olS/umbYk6evL4CxQG6UA1NI6qU78HbI3NgDqTFBvUJ+VT7YOs945s6h7+T9DHgjMMCM24gHfqVxZiW6SRRhbUb0YwOucLwN7XC6EOc3DF3wYv+tP+zACzJGh+D27hlpbLMeIY8U8l+QT1YEbxxRDOTHAjzQtM/kS3hlpbLb6AqojRm+siRrhTzT3K7pmbkmEKePQYJgZEpleSMGCV/WS3WjWDxOGrOlhFFEcuL2f+Uqya+6i+G2gfyL9MLKBkqPPCcBtc3QlIAAAAsAEAAGN0gVfVCwgZiMbBKYJWDCk89npvTuKsIdVFPscyCqF49kwsgJN+UWYnei+zSoaqwdAe3c/cEqyWD6eIw+hPZ/0oULUgxMCnyXdRR0zk5EE/rLg03vFJtHFgHs4N6Sc4ZZqteTAnb7tXkiskdl1AuHf299/oGJ0SVTlWNiLgVSn4Zbj9gDHmJm++Dwx1JynXyObuh586Bm4MmM5VzQbW6osGFws2RW7/Y5WCnXqmjWdKJcpNrW4UVfFtvkoO4gdWNSV2Ht7iGQ/ljDMSQKV6V1R4e1+84iwkk4kKP0RYOjOVcHKr/HvMJsKpXODbjVpd3XfbPBnoU4vGGgzJ6EIcMbgaJvdkJKTrGg7Q5yVkREXWCiR1x82rr6zcsQ0DTzMaDULocC1d4yDshxpkcCfsihsblOpU7cMn3shoiEBKCucwWFRqkKR76wWvdXhaQDWtd9W/7f/FjuH1WzI5hoK7AMyA4q8hbuE0du61Rv8imtuYf/ulHpJQgV9svOqtw+F+yityfvQQ/5F1qPPY24325maz0vC/1O6R+oU9mS1iJrKxjWGTloD5mnwzGL9feTZ7+UkAAACgAQAA5zGs5gsPrWHDLZ0ea/rGb8cks0L8i/v7+8iRtioTJ987pk/cAAcS6OK5URDsTvY6c4MwcTR5rwxiVVjODO0KmmnM8OwNSKctLaMmrk0X8Y180q9dpUrL1lybl1HJRaJChQw+jcTFUsVragR1kQerXS3BWe3E14v1luUg5VTEMPMBuPhzXrRsI05B8/KN/M5tSknw9z78GVtwVDE4hjAYM0Y8tG2NcgQ4wxveCfNHXgCoVLVfC1MS5sNmH8emJoFzpq4tKVVG3NQTZwkWwA1XksMphicGoMg7fN8Mz+5pQHK8HD8LY0IItD1cy0vRsBV/8LbSaqz5YXow82IKyBeXyt7UHVReHp0IVAArAAkhx3A4F38hwRHDvGxn3gh1S54RL7hmrtIFd93JuOx/vh0kAK/wnemtZBPDeoZQ+Z7ka592RutrtCAjXSAAQVVHD7xwk0LW5q6W57AanSguSZxIM7sjlFzg8IOMoEfLQhBLaptyP1JkkyHyggT5rldRLT7bVXnlvtGF3tlt/baGUfkHzGIE4wyDLVt/Cpzj2il9IJ5KAAAAoAEAAHoTi0rOdJPdTn4vtsCZkfzXodeNgIQD4Ib3dAcQOj26yDsGNWf4kIbeCMXKdYTuTa3QU9oRgKvHxB3LAULaGHEQqHElr+S+FOZ5N7DV100XR/0iVuEzjlak0KrqI4ZQvl1gTJ+BEwdn8GZGl/N/1DJPwGHZxWtM6nwqtPnK5Md5Uu5rwYznLJ3stuPcyIUFKksFUpnEPaMA0AdV7nYJqFNjtjbqrB5HSYfAT6Nf5knt2v0Ay5Sg7GidOKEiy3VAma/cz2q+9GJc74FpipvDG2AcUn1nhebRYO1PYuu/0KYzoHHeoB/GHYZLBcGwU1QaxYESDhTkI6tQPB+VvMf904SIrRp5aOuqjrNS9sokMCO1R170TrIsaDxh1WCamCHWFOi21Tk8h5MD2RVFIS+w77x8Bme639xjk5SfVFKDhLWnixqOyF+RH8d2fJmfBL6MIRTXmwkZCj9VZnJAqVW6sLOCl4ZOqmsB0hNMa4AP/ERB6mMqT9V5lbLgS/etSAc+fIERHEwBSP2rVBu98RLzkoMZ4nXFi6Clbb/f8cLWgs8XAAAAAA==');
