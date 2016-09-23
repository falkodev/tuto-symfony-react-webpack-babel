<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("{slug}", name="homepage", requirements={"slug"=".+"})
     */
    public function indexAction(Request $request, $slug = "default")
    {
        return $this->render('default/index.html.twig');
    }
}
