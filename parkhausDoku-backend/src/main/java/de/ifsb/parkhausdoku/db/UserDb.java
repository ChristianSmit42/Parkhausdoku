package de.ifsb.parkhausdoku.db;
import de.ifsb.parkhausdoku.model.PlanningUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<PlanningUser,String> {
}
