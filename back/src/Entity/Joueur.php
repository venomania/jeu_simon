<?php

namespace App\Entity;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\JoueurRepository;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=JoueurRepository::class)
 */
class Joueur
{
    /**
     * @Groups("joueur")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("joueur")
     * @ORM\Column(type="string", length=255)
     */
    private $useur;

    /**
     * @Groups("joueur")
     * @ORM\Column(type="integer")
     */
    private $score;

    /**
     * @Groups("joueur")
     * @ORM\Column(type="string", length=255)
     */
    private $temps;

    /**
     * @Groups("joueur")
     * @ORM\Column(type="date", nullable=true)
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUseur(): ?string
    {
        return $this->useur;
    }

    public function setUseur(string $useur): self
    {
        $this->useur = $useur;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getTemps(): ?string
    {
        return $this->temps;
    }

    public function setTemps(string $temps): self
    {
        $this->temps = $temps;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
