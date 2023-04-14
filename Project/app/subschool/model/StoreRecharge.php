<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_bcb9d00460397ef56dd872ae891e4b7f($e,$m){

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
return sg_load('E49C7E5A0ECCB319AAQAAAAXAAAABNAAAACABAAAAAAAAAD/ACxKjYhBFPZFYtp+ntNNddNxAHOQVyWvKkr77bOYFcfDedXJRUQZ/kwmpUHX80VSA5P3eGqsQy9SVRSmF1oKKakhv89ouLUbwBxtU0FFyNmK3DTlMsTeqLU/QLdja+hqd3d27O9bxz/lRfUQwPMw/jnvRvqyg5PMuHDwGcjvyS4eOEk0hLn/py5QLgYyVsrLQuN8ZrkarL/0vc4qh2ToottBkaibj1lXNt92rVdFMOKzECp72Xt3NIUwIzlrNwMH1vgMBmJznapbMcZ6ms+CrwcAAACoAQAAZQISJFczbaiwlsTNjpTRCZkfir7l2bfBbUZyeU26NomWfhviP5W8U1xRXoNQufdgMwo5DzBRFoJk0O1+8PFxHbATYwt9NmxNWMTvJ+TImy+wS042CRnxvPwz2f/c26pHGYUVed9sfO2kc+3dqMeJq8M8R95uVTP6ZLYBXkEJFL7KszUeBwIRAuveyRTn/2zLEgdZqE2196k2LnpQa00ssYIllJd/dEUIKn406ZB+MCAhjF0REIA1TEOS1ZeCMWTQT2m2wNR4DkgRlVhgjLHYSKzuS6cLZvK9f1LM++Hk2DLVopdH/DjZGJbr1dC/ncjoR5t8sM7ZZZKwcBpgE6hvfSIx4eMHM3B3xfphmGYgiV8HMRFo4YhYv+//hOQS9ba0ndX/ZcdNJptfPkMVKoDH8Zxdshd8stRQuc5EvxoeS8Oul7B2nAld27jrz0UsAhHOHMk106rb/aj3vnMEzZbOapl9Dp/yczmLfVdSXN7HhZeeV0ayyGKquNTLKY1SVOt12Z6Ag1YMRtC5MJeu70rRCloKkBlPrXqaOK6kwatMVK15n3ZXwV4avkcAAACgAQAA5CjdYFcTs7XGxwtMM/tHkQWnnV4IiKqogF5/ugxNH0X+E5HurTkGDPjMDAWcq3n+WtArvH2sroOEjXpvpJ/aJBanpcvYV1ewly28rv+GSrfnV8n385X5U3Sw6vgRcM+M62MD8XjV0ZaMoGoQ2NloeFhvPlHNNqbzxk4vfua2mEmzeLu8x5Rx6gV/C0KQgeKi1Jh9ILbVYCxnOE/KURW5gTw2jmVgpmxz7DndkiHmKX6Fdnw59oqc6fWz44XtwtNccA75ZDSqOjLo2UUUbpgFKyssklhjISj24h9cZuMOT0AllBvChIT+/J++polng23y0mFhgnuQleFwZT23S3GATx5yaeUdpHMuIfUgnMNWr5dNJ9yxAqeJNeRuHzMCUqw2QQJ1QAYCvjA/xQjxKKswUtb0ZxnJOgLR6oE/acxZLObwektQBqpVSWGPHBsU208kEc/upWFrwNKfxbPega0/nNK4V54CccMvjtmdvd0MmZycHDvk2wsieivgg+315aPqn5jej9OkMwVadRNp7JoxBvjYVdZH5bhnuHAuzob/hddIAAAAqAEAAG5SZl+fc/YOL7IAwJw4L5GKzaAyC73x+PBuTq2/s/vMrKSzE759lRVr6xYTMYratQV2bBDKwgsKVWwaAYrs3ngndMykd2hJ87iyN24S1oO+jp1heLQSAuoMsbNV+7jXH/Fl6ejmCZV5mueyEJTcZLOngh5MvHvWyXsLauyyf30XijDHX26zvHDxzmKnyeCs7AezyxozzntbrJl+6KZ4kUHVvI21i6Ycq0Q9WIKrlsieSva53e16SbLOIqyBp7g3O10fRSgzst1My2K7KaZaq/Zna3RL2BuJOv0V0UhQpib8DNcvLedwF8b/lC5VSOqjP1xXydVLkPD5wUr+RZ/EXVRtGlpUUGSf3+TNAc231/woNi02eskkF2rvDNYZyS7JUx03knQEi5soBSYAsqU0bk4JLjPl9p509XP089GH+Bp0E22nOSoZ0cB6ubsezRQUdBA9Ir7dLvPGryMGYKwBQ6et/SSLCM7bupgyu5S0MDaSFKNgBnh1zzLvh3rwBKoQCyzBm8PS0+RvRxBeXXVE9y0MKYz2cctfLqfr5BvXW338u5rKomXqFYZJAAAAkAEAAFJiKsjSZK2aYKT4Qvn7bWilZ3qDzw1R19dXQ+7AFN5LslNXZuF1smfAdzpImTerjsOjJtQ8JVQczsK/fMtYBy8jpzdpvvS49sn0+pawvRUhcfhj/xDEIktQwgP8G1fmk5t6VZcWnvw61fckw2WiepT4aKQxzntDfZnNpaW9PEaxaa1yO8UQ/zttepwJ7fEhvM218psQgtjd16PycwH1G+zdsLKkTNqkvwXlXCLIDBIDirizDrvcmgJ8Qk6f10HfLAUICWfdzGeYzTbH8LfzodfLhruq7KKDfj4afV341h3ev6sedWWLgJoWT9d1aIgHxSatOXTrzvV3BqPXzUUslIvmjZSs9KkXpKO8IvR46s/bmerBKynFvGVHAnryz7AIwKR+YS4s0wJ2drVpy7syn4UoL8cbj/GxsckH8mK5fD/wvHNGsv1/ZGhkDbqUrhdpO06w50/Gdd690kdM0V/+lVztplvw75jvWo1giHLL4CnB8pMjskgrVxfstY5qvj2VrxAFJvy3Gxj+lS9J7a+UrK9KAAAAmAEAAMI3H5W7nh8znjg8BLv0l5tz/1g+ubplELg7ZnTISGhEyTmAE/OTtRvEGYfbOvHcii4Gx3gUlulzhBb1NQEdlDc/zVZu2PFGyOaLjQxt0VF3wEG/02Cyj44/tJ6hggcSKXnlAfFD/Zl+7AjAJ3tOAmhobtwNe727kIU3LfyVTM+M4uE7ZO44LdQ4olZijKjFjBrr9ymbMQn8/QOvcv4gRomdRn4ZP5mhcN38zmQt39wI5vtBzHb6AkTW0Y8xV4mRe+hgbNkDXYde89iZzoSWntQAY0BZCEonkBuS2WSdM5uG6xlNYB1jYR6Kc6VfKTZm3Jfxuw1G+vIL3sdCwNz2BPhsbIf/v9qJMGGsYoj6GUFnWFg2n/bMd24BNgupmMrFYNgvbW8Fo+nkFW/j4yUgQ9qsLa8o0jE9xCNt7VCMk/TSnGS7YuXaSoRw1jlZEA10m2qauI0gM5kwUu6vtBgJieU5ce4+6uIM8kEU0AfVoHOt5v6ItDHYKNFXfwAlws6OubQC8Yu3VKhu3CduourhYRoYcE2aHatEXAAAAAA=');
